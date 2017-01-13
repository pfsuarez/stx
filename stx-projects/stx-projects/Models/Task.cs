using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace stx_projects.Models
{
    public class Task
    {
        public int Id { get; set; }

        [Required]
        [StringLength(5000)]
        public string Name { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Tags { get; set; }

        public ApplicationUser User { get; set; }

        public StatusType Status { get; set; }

        public Project Project { get; set; }

        [Required]
        public int ProjectId { get; set; }

        public ICollection<TaskComment> TaskComment { get; private set; }
    }
}