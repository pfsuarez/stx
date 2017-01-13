namespace stx_projects.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class taskcomments : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TaskComments", "TaskId", c => c.Int(nullable: false));
            CreateIndex("dbo.TaskComments", "TaskId");
            AddForeignKey("dbo.TaskComments", "TaskId", "dbo.Tasks", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TaskComments", "TaskId", "dbo.Tasks");
            DropIndex("dbo.TaskComments", new[] { "TaskId" });
            DropColumn("dbo.TaskComments", "TaskId");
        }
    }
}
