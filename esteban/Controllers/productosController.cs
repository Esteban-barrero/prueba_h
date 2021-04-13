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
using System.Web.Http.Results;



namespace esteban.Controllers
{
    [EnableCors(origins: "http://localhost:33786", headers: "*", methods: "*")]
    public class productosController : ApiController
    {
        private prueba_dEntities2 db = new prueba_dEntities2();

        // GET: api/productos
        public IQueryable<producto> Getproducto()
        {
            return db.producto.Where(p=> p.eliminado==null);
        }

        // GET: api/productos/5
        [ResponseType(typeof(producto))]
        public IHttpActionResult Getproducto(int id)
        {
            producto producto = db.producto.Find(id);
            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        // GET: api/productos/5   preubas  de like
        [ResponseType(typeof(producto))]
        public IHttpActionResult Getproducto(string categoria)
        {
            var producto = (from p in db.producto join ca in db.categoria on p.uid_categoria equals ca.uid_categoria 
            select new producto() ).ToList();            
                
            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        // GET: api/productos/  para busca los productos pro categoria y nombre del producto
        [ResponseType(typeof(producto))]
        public IHttpActionResult Getproducto(int id, int id_categoria, string nombre)
        {
            var producto = db.producto.Where(p => p.uid_categoria == id_categoria && p.eliminado == null && p.stock > 0 && p.descripcion.Contains(nombre)).ToList();
            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        // GET: api/productos/  para busca los productos pro categoria
        [ResponseType(typeof(producto))]
        public IHttpActionResult Getproducto(int id, int id_categoria)
        {     
            var producto = db.producto.Where(p => p.uid_categoria == id_categoria && p.eliminado== null && p.stock>0).ToList();
            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        // PUT: api/productos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putproducto(int id, producto producto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != producto.uid_producto)
            {
                return BadRequest();
            }

            db.Entry(producto).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!productoExists(id))
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

        // POST: api/productos
        [ResponseType(typeof(producto))]
        public IHttpActionResult Postproducto(producto producto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.producto.Add(producto);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (productoExists(producto.uid_producto))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = producto.uid_producto }, producto);
        }

        // DELETE: api/productos/5
        [ResponseType(typeof(producto))]
        public IHttpActionResult Deleteproducto(int id)
        {
            producto producto = db.producto.Find(id);
            if (producto == null)
            {
                return NotFound();
            }

            db.producto.Remove(producto);
            db.SaveChanges();

            return Ok(producto);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool productoExists(int id)
        {
            return db.producto.Count(e => e.uid_producto == id) > 0;
        }
    }
}