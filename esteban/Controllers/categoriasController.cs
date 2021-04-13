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

namespace esteban.Controllers
{
    public class categoriasController : ApiController
    {
        private prueba_dEntities2 db = new prueba_dEntities2();

        // GET: api/categorias
        public IQueryable<categoria> Getcategoria()
        {
            return db.categoria;
        }

        // GET: api/categorias/5
        [ResponseType(typeof(categoria))]
        public IHttpActionResult Getcategoria(int id)
        {
            categoria categoria = db.categoria.Find(id);
            if (categoria == null)
            {
                return NotFound();
            }

            return Ok(categoria);
        }

        // PUT: api/categorias/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcategoria(int id, categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categoria.uid_categoria)
            {
                return BadRequest();
            }

            db.Entry(categoria).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!categoriaExists(id))
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

        // POST: api/categorias
        [ResponseType(typeof(categoria))]
        public IHttpActionResult Postcategoria(categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.categoria.Add(categoria);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (categoriaExists(categoria.uid_categoria))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = categoria.uid_categoria }, categoria);
        }

        // DELETE: api/categorias/5
        [ResponseType(typeof(categoria))]
        public IHttpActionResult Deletecategoria(int id)
        {
            categoria categoria = db.categoria.Find(id);
            if (categoria == null)
            {
                return NotFound();
            }

            db.categoria.Remove(categoria);
            db.SaveChanges();

            return Ok(categoria);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool categoriaExists(int id)
        {
            return db.categoria.Count(e => e.uid_categoria == id) > 0;
        }
    }
}