Pedidos = new function () {
    this.Proximo_uid_pedidoM;
    this.arregloPedidoMEditar;
    this.uid_pedidoM_E;
    
    this.getPedidosMxUid = function (pUid_pedido) {
        try {
            var pPARAMETROS = {};
            var pSRV = "pedido_maestro/?id="+pUid_pedido;
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Pedidos.getPedidosMxUidRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.getPedidosMxUidRespuesta = function (pRetorno) {
        try {           
            $("#pleaseWaitDialog").modal("hide");           
            //Obtiene la informacion de los requerimientos
            var vArregloPedidosM = pRetorno;
            if (vArregloPedidosM.uid_estado !=1) {
                Mensaje.informacion("Señor usuario  no se puede modificar este  pedido  ya que no esta en estado progreso");
                return false;
            }

            $("#txtUidPedidoM").val(vArregloPedidosM.uid_pedido_m);
            Pedidos.arregloPedidoMEditar = vArregloPedidosM;
            Pedidos.editarPedidoM(pRetorno);            
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    this.getPedidosM_filtro = function () {
        try {
            var pPARAMETROS = {};
            var pSRV = "";
            if ($("#txtFiltro").val() != "") {
                 pSRV = "pedido_maestro/?id=2&nombre=" + $("#txtFiltro").val();
            } else {
                 pSRV = "pedido_maestro";
            }          
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Pedidos.getPedidosMRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.getPedidosM = function () {
        try {
            var pPARAMETROS = { pFiltro: $("#txtFiltro").val() };
            var pSRV = "pedido_maestro";
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Pedidos.getPedidosMRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de mostrar la informacion de registros en los campos del grid
    this.getPedidosMRespuesta = function (pRetorno) {
        try {
           
            $("#pleaseWaitDialog").modal("hide");
            var txtestado = "";
            var txtcategoria = "";
            var txtcliente = "";
            //Obtiene la informacion de los requerimientos
            var vArregloPedidosM = pRetorno;
            var vTabla = "";

            $.each(vArregloPedidosM, function (index, pObj) {

                $.each(Generico.arreglo_estados, function (index, pObjEstados) {                   
                    if (pObjEstados.uid_estado == pObj.uid_estado) {
                        txtestado = pObjEstados.descripcion;
                    }
                });  
                $.each(Generico.arreglo_categorias, function (index, pObjCategorias) {                    
                    if (pObjCategorias.uid_categoria == pObj.uid_categoria) {
                        txtcategoria = pObjCategorias.descripcion;
                    }
                });  
                $.each(Generico.arreglo_clientes, function (index, pObjClientes) {
                    if (pObjClientes.uid_cliente == pObj.uid_cliente) {
                        txtcliente = pObjClientes.nombre;
                    }
                });  
              
                vTabla += "<tr id='tr_PedidoM_" + pObj.uid_pedido_m + "'  ondblclick='Pedidos.getPedidosMxUid(" + pObj.uid_pedido_m+")'>" +
                    "<td id='uid'>" + pObj.uid_pedido_m + "</td>" +//style='display:none' 
                    "<td>" + txtcliente + "</td>" +
                    "<td>" + txtcategoria + "</td>" +
                    "<td>" + pObj.valor_total + "</td>" +
                    "<td>" + txtestado + "</td>" +
                    "</tr>"
            });           
            $("#tBodyPedidosM").html(vTabla);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };



    this.setPedidoM = function (pMax_uid) {
        try {
            if ($("#txtValor").val() == '') {
                Mensaje.informacion("Señor usuario no se a agregado productos al pedido");
                return false;
            }
            var proximo = pMax_uid + 1;
            var vUid_cliente = $("#cmbCliente").val();
            var vUid_categoria = $("#cmbCategoria").val();
            var vValor = $("#txtValor").val();
            var vUid_estado = $("#cmbEstado").val();

            var pPARAMETROS = {
                uid_pedido_m: proximo,
                uid_cliente: vUid_cliente,
                uid_categoria: vUid_categoria,
                valor_total: vValor,
                uid_estado: vUid_estado
            };
            var pSRV = "pedido_maestro";
            $("#pleaseWaitDialog").modal("show");
            General.comandoPost(Pedidos.setPedidosMRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de mostrar la informacion de registros en los campos del grid
    this.setPedidosMRespuesta = function (pRetorno) {
        try {
            Mensaje.informacion("se agrego correctamente el pedido");
            $("#pleaseWaitDialog").modal("hide");
            $("#modalFrmMaterPedido").modal("hide");
            Pedidos.getPedidosM();
            //para agregar
            var elementos = $('.proagregar');
            var x = 0;
            var id_p = "";
            $.each(elementos, function (i, val) {
                id_p = $(this).attr("value");
                var parametros = {
                    uid_producto: id_p,
                    cantidad: $("#cantProdD_" + id_p).val(),
                    valor: $("#valorProdD_" + id_p).val(),
                    siguiente: x
                }
                Productos.getmaxPedidoD(pRetorno.uid_pedido_m, parametros);
                x++;
            });

            
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    this.getmaxPedidoM = function () {
        try {
            var pPARAMETROS = {};
            var pSRV = "pedido_maestro/?count='si'";
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Pedidos.setPedidoM, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.editarPedidoM = function (pPedidoM) {
        try {
            General.limpiarCampos();            
            $("#tBodyProductosD").html("");
            $("#cmbCategoria").prop('disabled', false);
            $("#txtUidPedidoM").val(pPedidoM.uid_pedido_m);
            $("#modalFrmMaterPedido").modal("show");
            //pintamos los datos
            $("#cmbCliente").val(pPedidoM.uid_cliente);
            $("#cmbCategoria").val(pPedidoM.uid_categoria);
            $("#cmbEstado").val(pPedidoM.uid_estado);
            $("#txtValor").val(pPedidoM.valor_total);
            //llamamos para llenar el detalle
            Pedidos.getDetallePedido(pPedidoM.uid_pedido_m);
            
            $("#cmbCategoria").prop('disabled', true);
            $("#cmbCliente").prop('disabled', true);
            $("#cmbEstado").prop('disabled', false);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //traermos los productos de un pedido por id 
    this.getDetallePedido = function (pUid_pedido) {
        try {
            var pPARAMETROS = {};
            var pSRV = "pedido_detalle/?id=" + pUid_pedido + "&id_PedidoM=" + pUid_pedido;
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Pedidos.getDetallePedidoRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.getDetallePedidoRespuesta = function (pRetorno) {
        try {

            $("#pleaseWaitDialog").modal("hide");
           
            //Obtiene la informacion de los requerimientos
            var vArregloPedidosD = pRetorno;
            var vTabla = "";
            var txtproducto = "";
            $.each(vArregloPedidosD, function (index, pObj) {

                $.each(Generico.arreglo_productos, function (index, pObjProductos) {
                    if (pObjProductos.uid_producto == pObj.uid_producto) {
                        txtproducto = pObjProductos.descripcion;
                    }
                });
               

                vTabla += "<tr id='tr_PedidoM_" + pObj.uid_pedido_d + "'  ondblclick='Productos.getProductoPedidoDxUid(" + pObj.uid_pedido_d + ")'>" +
                    "<td><input  uid='" + pObj.uid_pedido_d +"'  type='text' readonly id='uidProdD_" + pObj.uid_producto + "' value='" + pObj.uid_producto +"' class='proexistente'></td>"+
                    "<td>" + txtproducto  + "</td>" +
                    "<td><input type='text' readonly id='cantProdD_" + pObj.uid_producto + "' value='" + pObj.cantidad + "' ></td>" +
                    "<td><input type='text' readonly id='valorProdD_" + pObj.uid_producto + "' value='" + pObj.valor + "' class='prosuma' ></td>" +                    
                    "</tr>"
            });
            $("#tBodyProductosD").html(vTabla);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    
    this.ModificarProductoPedidod = function () {
        try {

            if ($("#cmbEstado").val() != 1) {
                Mensaje.informacion("en el estado actual del pedido no se pueden agregar productos");
                return false;
            }
            var bool = confirm("Seguro de modificar el Producto del pedido?");
            if (!bool) {
                return false;
            }

            var uid_pedidoD = $("#txtUidPedidoD").val();
            var uid_pedidoM = $("#txtUidPedidoM").val();
            var uid_Producto = $("#txtUidProducto").val();
            var cantidad = $("#txtCantidadD").val();
            var valor = $("#txtValorD").val();
            
            Pedidos.uid_pedidoM_E = uid_pedidoM;
            var pPARAMETROS = {
                "uid_pedido_d": uid_pedidoD,
                "uid_pedido_m": uid_pedidoM,
                "uid_producto": uid_Producto,
                "cantidad": cantidad,
                "valor": valor,
                "eliminado": null
            };
            var pSRV = "pedido_detalle/?id="+uid_pedidoD;
            $("#pleaseWaitDialog").modal("show");
            General.comandoPut(Pedidos.ModificarProductoPedidodRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.ModificarProductoPedidodRespuesta = function (pRetorno) {
        try {

            $("#pleaseWaitDialog").modal("hide");
            Pedidos.getDetallePedido($("#txtUidPedidoM").val());
            Mensaje.exito("se modifico el producto correctamente.");
            Pedidos.getPedidosDxUidsuma(Pedidos.uid_pedidoM_E);
            $("#modalFrmModificarEliminarProducto").modal("hide");
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };
    
    this.EliminarProductoPedidod = function () {
        try {

            if ($("#cmbEstado").val() != 1) {
                Mensaje.informacion("en el estado actual del pedido no se pueden agregar productos");
                return false;
            }

            var bool = confirm("Seguro de eliminar el Producto del pedido?");
            if (!bool) {
                return false;
            }
            var uid_pedidoD = $("#txtUidPedidoD").val();
            var uid_pedidoM = $("#txtUidPedidoM").val();
            var uid_Producto = $("#txtUidProducto").val();
            var cantidad = $("#txtCantidadD").val();
            var valor = $("#txtValorD").val();
            Pedidos.uid_pedidoM_E = uid_pedidoM;
            
            var pPARAMETROS = {
                "uid_pedido_d": uid_pedidoD,
                "uid_pedido_m": uid_pedidoM,
                "uid_producto": uid_Producto,
                "cantidad": cantidad,
                "valor": valor,
                "eliminado": "S"
            };
            var pSRV = "pedido_detalle/?id=" + uid_pedidoD;
            $("#pleaseWaitDialog").modal("show");
            General.comandoPut(Pedidos.EliminarProductoPedidodRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };



    this.EliminarProductoPedidodRespuesta = function (pRetorno) {
        try {
            
            $("#pleaseWaitDialog").modal("hide");
            Pedidos.getDetallePedido($("#txtUidPedidoM").val());
            Mensaje.exito("se elimino el producto correctamente.");
            $("#modalFrmModificarEliminarProducto").modal("hide");
            Pedidos.getPedidosDxUidsuma(Pedidos.uid_pedidoM_E);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };


    this.getPedidosDxUidsuma = function (pUid_pedido) {
        try {
            
            var pPARAMETROS = {};
            var pSRV = "pedido_detalle/?id=" + pUid_pedido +"&id_PedidoM="+pUid_pedido;
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Pedidos.getPedidosDxUidsumaRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.getPedidosDxUidsumaRespuesta = function (pRetorno) {
        try {
            $("#pleaseWaitDialog").modal("hide");
            
            var sum = 0;
            $.each(pRetorno, function (index, pObjPedidosD) {                
                sum += pObjPedidosD.valor;
            }); 

            var pPARAMETROS = {
                "uid_pedido_m": Pedidos.uid_pedidoM_E,
                "uid_cliente": Pedidos.arregloPedidoMEditar.uid_cliente,
                "uid_categoria": Pedidos.arregloPedidoMEditar.uid_categoria,
                "valor_total": sum,
                "uid_estado": Pedidos.arregloPedidoMEditar.uid_estado,
                "eliminado": null
            };
            var pSRV = "pedido_maestro/?id=" + Pedidos.uid_pedidoM_E;
            $("#txtValor").val(sum);
           
            $("#pleaseWaitDialog").modal("show");
            General.comandoPut(Pedidos.Actualizarvalor_totalRespuesta, pPARAMETROS, pSRV);

        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };


    this.Actualizarvalor_totalRespuesta = function (pRetorno) {
        try {
            $("#pleaseWaitDialog").modal("hide");           

        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    this.ModificarPedidoM = function () {
        try {
            var bool = confirm("Seguro de modificar el pedido?");
            if (!bool) {
                return false;
            }
            var uid_pedidoM = $("#txtUidPedidoM").val();
            var uid_cliente = $("#cmbCliente").val();
            var uid_categoria = $("#cmbCategoria").val();
            var uid_estado = $("#cmbEstado").val();
            var valor = $("#txtValor").val();
          
            var pPARAMETROS = {
                "uid_pedido_m": uid_pedidoM,
                "uid_cliente": uid_cliente,
                "uid_categoria": uid_categoria,
                "valor_total": valor,
                "uid_estado": uid_estado,
                "eliminado": null
            };
            var pSRV = "pedido_maestro/?id=" + uid_pedidoM;
            $("#pleaseWaitDialog").modal("show");
            General.comandoPut(Pedidos.ModificarPedidoMRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.ModificarPedidoMRespuesta = function (pRetorno) {
        try {
            $("#pleaseWaitDialog").modal("hide");
            Pedidos.getPedidosM();
            Mensaje.exito("se modifico el pedido correctamente.");

             //para agregar
            var elementos = $('.proagregar');
            var x = 0;
            var id_p = "";
            $.each(elementos, function (i, val) {               
                id_p = $(this).attr("value");             
                    var parametros = {
                        uid_producto: id_p,
                        cantidad: $("#cantProdD_" + id_p).val(),
                        valor: $("#valorProdD_" + id_p).val(),
                        siguiente:x
                    }                  
                    Productos.getmaxPedidoD($("#txtUidPedidoM").val(), parametros);
                x++;
            });

            //para modificar
            var elementos = $('.proexistente');
            var x = 0;
            var id_p = "";
            $.each(elementos, function (i, val) {
                id_pedidoD = $(this).attr("uid");
                id_p = $(this).attr("value");
                var parametros = {
                    uid_producto: id_p,
                    cantidad: $("#cantProdD_" + id_p).val(),
                    valor: $("#valorProdD_" + id_p).val(),
                    uid_pedido_d: id_pedidoD,
                    uid_pedido_m: $("#txtUidPedidoM").val()
                }
                Productos.updateProdutoPedidoD(parametros);
                x++;
            });

            $("#modalFrmMaterPedido").modal("hide");
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };


    this.getPedidosMxUidparaarreglo = function (pUid_pedido) {
        try {
            var pPARAMETROS = {};
            var pSRV = "pedido_maestro/?id=" + pUid_pedido;
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Pedidos.getPedidosMxUidparaarregloRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.getPedidosMxUidparaarregloRespuesta = function (pRetorno) {
        try {
            $("#pleaseWaitDialog").modal("hide");
            var vArregloPedidosM = pRetorno;
            Pedidos.arregloPedidoMEditar = vArregloPedidosM;
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    this.ModificarPedidoM_valor = function (valor) {
        try {
           
            var pPARAMETROS = {
                "uid_pedido_m": Pedidos.arregloPedidoMEditar.uid_pedido_m,
                "uid_cliente": Pedidos.arregloPedidoMEditar.uid_cliente,
                "uid_categoria": Pedidos.arregloPedidoMEditar.uid_categoria,
                "valor_total": Pedidos.arregloPedidoMEditar.valor_total,
                "uid_estado": Pedidos.arregloPedidoMEditar.uid_estado,
                "eliminado": null
            };
            var pSRV = "pedido_maestro/?id=" + uid_pedidoM;
            $("#pleaseWaitDialog").modal("show");
            General.comandoPut(Pedidos.ModificarPedidoMRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };
};