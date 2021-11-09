import React from "react";
import imgPasta from "./img/pasta.jpg";

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="group gallery">
          <h2 class="group__title">Nuestro Menú</h2>
          <div class="container container--flex">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="item card h-100">
                  <img
                    src={imgPasta}
                    className="item-img card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="item-name card-title">Pasta a la boloñesa</h5>
                    <p class="card-text">
                      Disfuta de nuestro espaggeti especial
                    </p>
                    <h2 class="item-price ">18000 $</h2>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal0"
                  >
                    Agregar al carrito
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal0"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p>
                            esta seguro que desea agregar este producto al carro
                            de compras?
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary addtocar"
                          >
                            Si
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="item card h-100">
                  <img
                    src={imgPasta}
                    className="item-img card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="item-name card-title">Pizza </h5>
                    <p class="card-text">
                      Nuestra especialidad, las pizzas ven y disfuta de uestras
                      pizzas artesanas con sabores distintos a los que estas
                      acostumbrado
                    </p>
                    <h2 class="item-price ">28000 $</h2>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Agregar al carrito
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal1"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Pizzas
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p>
                            esta seguro que desea agregar este producto al carro
                            de compras?
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary addtocar"
                          >
                            Si
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col ">
                <div class="item card h-100">
                  <img
                    src={imgPasta}
                    className="item-img card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title item-name">Ravioles</h5>
                    <p class="card-text item-des">
                      Degusta nuestros mas exquisitos raviolis a la italiana
                    </p>
                    <h2 class="item-price ">20000 $</h2>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Agregar al carrito
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal2"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Raviolis
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p>
                            esta seguro que desea agregar este producto al carro
                            de compras?
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary addtocar"
                          >
                            Si
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Menu;
