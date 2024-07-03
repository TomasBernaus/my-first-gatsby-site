const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    // Create contract pages
    const contractTemplate = path.resolve('src/themes/contract.js');
    const contractAppTemplate = path.resolve('src/themes/contractApp.js');
    const quoteContactTemplate = path.resolve('src/themes/quoteContact.js');

    const contractPlans = ['Basico', 'Avanzado', 'Profesional'];
    contractPlans.forEach(plan => {
        createPage({
            path: `/contratar-desarrollo-web/${plan}`,
            component: contractTemplate,
            context: {
                plan
            }
        });

        createPage({
            path: `/contratar-desarrollo-app/${plan}`,
            component: contractAppTemplate,
            context: {
                plan
            }
        });
    });

    // Create quote contact pages
    const quoteServices = [
        "desarrollo-web-a-medida", "desarrollo-app", "automatizacion-erp-crm",
        "diseno-web-ui-ux", "por-que-no-posiciona-mi-web", "auditoria-posicionamiento-SEO",
        "analisis-redes-sociales", "captacion-fidelizacion-clientes-CRM"
    ];

    quoteServices.forEach(service => {
        createPage({
            path: `/pedir-presupuesto/${service}`,
            component: quoteContactTemplate,
            context: {
                service
            }
        });
    });

    // Create article pages
    const articles = await graphql(`
        query {
            allNodeArticle {
                nodes {
                    id
                    title
                    path {
                        alias
                    }
                }
            }
        }
    `);

    articles.data.allNodeArticle.nodes.forEach(article => {
        createPage({
            path: article.path.alias,
            component: path.resolve('src/templates/article.js'),
            context: {
                ArticleId: article.id
            }
        });
    });

    // Create project pages
    const projects = await graphql(`
        query {
            allNodeProjecte {
                nodes {
                    id
                    title
                    path {
                        alias
                    }
                }
            }
        }
    `);

    projects.data.allNodeProjecte.nodes.forEach(project => {
        createPage({
            path: project.path.alias,
            component: path.resolve('src/templates/project.js'),
            context: {
                ProjecteId: project.id
            }
        });
    });
};
