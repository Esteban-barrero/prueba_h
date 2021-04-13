using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using esteban.Models;
using System.Web.Http.Cors;

namespace esteban.Controllers
{
    [EnableCors(origins: "http://localhost:33786", headers: "*", methods: "*")]
    public class pedido_maestroController : ApiController
    {
        private prueba_dEntities2 db = new prueba_dEntities2();

        // GET: api/pedido_maestro
        public IQueryable<pedido_maestro> Getpedido_maestro()
        {
            return db.pedido_maestro.Where(p=>p.eliminado==null);
        }

      
        // GET: api/pedido_maestro/5  preubassssss
        [ResponseType(typeof(pedido_maestro))]
        //public IHttpActionResult Getpedido_maestro(int id, string nombre)
        public IQueryable Getpedido_maestro(int id, string nombre)
        {

            try
            {

                IQueryable tmp = db.pedido_maestro.Join(db.cliente,
               p => p.uid_cliente,
               c => c.uid_cliente,
               (p, c) => new
               {
                   uid_pedido_m = p.uid_pedido_m,
                   uid_cliente = p.uid_cliente,
                   uid_categoria = p.uid_categoria,
                   valor_total = p.valor_total,
                   uid_estado = p.uid_estado,
                   eliminado = p.eliminado,
                   nombre = c.nombre

               }).
           Where(pm => pm.eliminado == null && pm.nombre.Contains(nombre));
         //       Where(pm => pm.eliminado == null && pm.nombre.StartsWith(nombre));

                return tmp;
            }
            catch(Exception ex)
            {

            }
            return null;
        }


        // GET: api/pedido_maestro/5
        [ResponseType(typeof(pedido_maestro))]
        public IHttpActionResult Getpedido_maestro(int id)
        {
            pedido_maestro pedido_maestro = db.pedido_maestro.Find(id);
            if (pedido_maestro == null)
            {
                return NotFound();
            }

            return Ok(pedido_maestro);
        }

        // GET: api/pedido_maestro/ para traer el count
        [ResponseType(typeof(pedido_maestro))]
        public IHttpActionResult Getpedido_maestro(string count)
        {
            var cantidad = db.pedido_maestro.Max(p => p.uid_pedido_m);

            return Ok(cantidad);
        }

        // PUT: api/pedido_maestro/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putpedido_maestro(int id, pedido_maestro pedido_maestro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pedido_maestro.uid_pedido_m)
            {
                return BadRequest();
            }

            db.Entry(pedido_maestro).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!pedido_maestroExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/pedido_maestro
        [ResponseType(typeof(pedido_maestro))]
        public IHttpActionResult Postpedido_maestro(pedido_maestro pedido_maestro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.pedido_maestro.Add(pedido_maestro);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (pedido_maestroExists(pedido_maestro.uid_pedido_m))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pedido_maestro.uid_pedido_m }, pedido_maestro);
        }

        // DELETE: api/pedido_maestro/5
        [ResponseType(typeof(pedido_maestro))]
        public IHttpActionResult Deletepedido_maestro(int id)
        {
            pedido_maestro pedido_maestro = db.pedido_maestro.Find(id);
            if (pedido_maestro == null)
            {
                return NotFound();
            }

            db.pedido_maestro.Remove(pedido_maestro);
            db.SaveChanges();

            return Ok(pedido_maestro);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool pedido_maestroExists(int id)
        {
            return db.pedido_maestro.Count(e => e.uid_pedido_m == id) > 0;
        }
    }
}