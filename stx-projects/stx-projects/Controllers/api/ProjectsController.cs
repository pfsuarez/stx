using stx_projects.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace stx_projects.Controllers.api
{
    public class ProjectsController : ApiController
    {
        private readonly ApplicationDbContext _context;

        public ProjectsController()
        {
            _context = new ApplicationDbContext();
        }

        // GET api/<controller>
        public IEnumerable<Project> Get()
        {
            var projects = _context.Projects.ToList();
            return projects;
        }

        // GET api/<controller>/5
        public Project Get(int id)
        {
            var project = _context.Projects.Where(x=> x.Id == id).FirstOrDefault();
            return project;
        }

        // POST api/<controller>
        public void Post([FromBody]Project project)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Project project)
        {
            var pr = _context.Projects.Where(x => x.Id == id).FirstOrDefault();

            if(pr != null)
            {
                pr.Name = project.Name;
                pr.StartDate = project.StartDate;
                pr.EndDate = project.EndDate;
                pr.Tags = project.Tags;

                _context.SaveChanges();
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            var project = _context.Projects.FirstOrDefault(x => x.Id == id);

            if(project != null)
            {
                _context.Projects.Remove(project);
                _context.SaveChanges();
            }
        }
    }
}