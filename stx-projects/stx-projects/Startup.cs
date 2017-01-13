using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(stx_projects.Startup))]
namespace stx_projects
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
