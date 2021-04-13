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
    public class pedido_detalleController : ApiController
    {
        private prueba_dEntities2 db = new prueba_dEntities2();

        // GET: api/pedido_detalle
        public IQueryable<pedido_detalle> Getpedido_detalle()
        {
            return db.pedido_detalle;
        }

        // GET: api/pedido_detalle/5
        [ResponseType(typeof(pedido_detalle))]
        public IHttpActionResult Getpedido_detalle(int id)
        {
            pedido_detalle pedido_detalle = db.pedido_detalle.Find(id);
            if (pedido_detalle == null)
            {
                return NotFound();
            }

            return Ok(pedido_detalle);
        }

        // GET: api/pedido_detalle/5
        [ResponseType(typeof(pedido_detalle))]
        public IHttpActionResult Getpedido_detalle(string count)
        {            
            var cantidad = db.pedido_detalle.Max(p => p.uid_pedido_d);
            return Ok(cantidad);
        }


        // GET: api/pedido_detalle/5
        [ResponseType(typeof(pedido_detalle))]
        public IHttpActionResult Getpedido_detalle(int id, int id_PedidoM)
        {
            var pedido_detalle = db.pedido_detalle.Where(p=>p.uid_pedido_m==id_PedidoM && p.eliminado==null).ToList();
            if (pedido_detalle == null)
            {
                return NotFound();
            }

            return Ok(pedido_detalle);
        }

        // PUT: api/pedido_detalle/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putpedido_detalle(int id, pedido_detalle pedido_detalle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pedido_detalle.uid_pedido_d)
            {
                return BadRequest();
            }

            db.Entry(pedido_detalle).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!pedido_detalleExists(id))
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

        // POST: api/pedido_detalle
        [ResponseType(typeof(pedido_detalle))]
        public IHttpActionResult Postpedido_detalle(pedido_detalle pedido_detalle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.pedido_detalle.Add(pedido_detalle);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (pedido_detalleExists(pedido_detalle.uid_pedido_d))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pedido_detalle.uid_pedido_d }, pedido_detalle);
        }

        // DELETE: api/pedido_detalle/5
        [ResponseType(typeof(pedido_detalle))]
        public IHttpActionResult Deletepedido_detalle(int id)
        {
            pedido_detalle pedido_detalle = db.pedido_detalle.Find(id);
            if (pedido_detalle == null)
            {
                return NotFound();
            }

            db.pedido_detalle.Remove(pedido_detalle);
            db.SaveChanges();

            return Ok(pedido_detalle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool pedido_detalleExists(int id)
        {
            return db.pedido_detalle.Count(e => e.uid_pedido_d == id) > 0;
        }
    }
}