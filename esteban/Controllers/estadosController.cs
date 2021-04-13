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
    public class estadosController : ApiController
    {
        private prueba_dEntities2 db = new prueba_dEntities2();

        // GET: api/estados
        public IQueryable<estado> Getestado()
        {
            return db.estado;
        }

        // GET: api/estados/5
        [ResponseType(typeof(estado))]
        public IHttpActionResult Getestado(int id)
        {
            estado estado = db.estado.Find(id);
            if (estado == null)
            {
                return NotFound();
            }

            return Ok(estado);
        }

        // PUT: api/estados/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putestado(int id, estado estado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != estado.uid_estado)
            {
                return BadRequest();
            }

            db.Entry(estado).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!estadoExists(id))
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

        // POST: api/estados
        [ResponseType(typeof(estado))]
        public IHttpActionResult Postestado(estado estado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.estado.Add(estado);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (estadoExists(estado.uid_estado))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = estado.uid_estado }, estado);
        }

        // DELETE: api/estados/5
        [ResponseType(typeof(estado))]
        public IHttpActionResult Deleteestado(int id)
        {
            estado estado = db.estado.Find(id);
            if (estado == null)
            {
                return NotFound();
            }

            db.estado.Remove(estado);
            db.SaveChanges();

            return Ok(estado);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool estadoExists(int id)
        {
            return db.estado.Count(e => e.uid_estado == id) > 0;
        }
    }
}