'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">help-cook documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>Léeme
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Propiedades
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' : 'data-target="#xs-components-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' :
                                            'id="xs-components-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MostrarRecetasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MostrarRecetasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MostrarUnaRecetaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MostrarUnaRecetaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubirRecetaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubirRecetaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' : 'data-target="#xs-injectables-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' :
                                        'id="xs-injectables-links-module-AppModule-8967f95e5e14071bf7d398459114ff0d2524156eb8e155262ff0db9f2142a2a2c90ae075c244ac6de018895c8ed85293998b31952f03aed2e303c7fc69d3c007"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Componentes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/InicioComponent.html" data-type="entity-link" >InicioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MostrarRecetasComponent.html" data-type="entity-link" >MostrarRecetasComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Clases</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Favoritos.html" data-type="entity-link" >Favoritos</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ingredientes.html" data-type="entity-link" >Ingredientes</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pasos.html" data-type="entity-link" >Pasos</a>
                            </li>
                            <li class="link">
                                <a href="classes/Receta.html" data-type="entity-link" >Receta</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuarios.html" data-type="entity-link" >Usuarios</a>
                            </li>
                            <li class="link">
                                <a href="classes/Valoraciones.html" data-type="entity-link" >Valoraciones</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MiServicio.html" data-type="entity-link" >MiServicio</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Rutas</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura de la documentación</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});