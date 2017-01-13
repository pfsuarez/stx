using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace stx_projects.Models
{
    public class TaskComment
    {
        public int Id { get; set; }

        [Required]
        [StringLength(5000)]
        public string Comment { get; set; }

        public DateTime CommentDate { get; set; }

        public Task Task { get; set; }

        [Required]
        public int TaskId { get; set; }
    }
}