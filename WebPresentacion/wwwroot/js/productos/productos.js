Productos = new function () {
    this.arregloProductosPedidoD;

    this.getProductosxCategoriaxnombre = function () {
        try {
            var pCategoria = $("#cmbCategoria").val();
            var pPARAMETROS = {};
            var pSRV = "";
            if ($("#txtFiltroProduto").val() != "") {
                 pSRV = "productos/?id=1&id_categoria=" + pCategoria + "&nombre=" + $("#txtFiltroProduto").val();
            } else {
                 pSRV = "productos/?id=1&id_categoria=" + pCategoria ;
            }    
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Productos.getProductosxCategoriaRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };
    this.getProductosxCategoria = function (pCategoria) {
        try {
           
           // var pPARAMETROS = { pFiltro: $("#txtFiltro").val() };
            var pPARAMETROS = {};
            var pSRV = "productos/?id=1&id_categoria=" + pCategoria;  
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Productos.getProductosxCategoriaRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de mostrar la informacion de registros en los campos del grid
    this.getProductosxCategoriaRespuesta = function (pRetorno) {
        try {
            
            $("#pleaseWaitDialog").modal("hide");        
           
            //Obtiene la informacion de los requerimientos
            var vArregloProductos = pRetorno;
            var vTabla = "";
            var txtCategoria = "";
            $.each(vArregloProductos, function (index, pObj) {
                txtCategoria = "";
                $.each(Generico.arreglo_categorias, function (index, pObjCategorias) {
                    if (pObjCategorias.uid_categoria == pObj.uid_categoria) {
                        txtcategoria = pObjCategorias.descripcion;
                    }
                }); 

                vTabla += "<tr>" +
                   
                    "<td><input type='checkbox' onclick='Productos.habilitarcantidad(" + pObj.uid_producto + ")' id='checkP_" + pObj.uid_producto + "' class='check_p'></td>" +  
                    "<td id='uid'>" + pObj.uid_producto + "</td>" +//style='display:none' 
                    "<td><input type='text' readonly id='despP_" + pObj.uid_producto + "' value='" + pObj.descripcion +"' ></td>" +
                    "<td>" + txtcategoria + "</td>" +
                    "<td style='display: none'>" + pObj.stock + "</td>" +
                    "<td ><input type='number' readonly id='valorproducto_" + pObj.uid_producto + "' value='" + pObj.valor +"' ></td>" +
                    "<td><input type='number'  id='CantidadP_" + pObj.uid_producto + "' value='0' disabled class='check_cant' onchange='Productos.calcularvalor(" + pObj.uid_producto + ");'></td>" +
                    "<td><input type='number' readonly id='valorP" + pObj.uid_producto + "'></td>" +
                    "</tr>"
            });
            $("#tBodyProductos").html(vTabla);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    this.habilitarcantidad = function (id_producto) {
        try {
            if ($("#checkP_" + id_producto).is(':checked')) {
                $("#CantidadP_" + id_producto).prop('disabled', false);
                //$("#CantidadP_" + id_producto).val("1");
            } else {
                $("#CantidadP_" + id_producto).prop('disabled', true);
                $("#CantidadP_" + id_producto).val("0");

            }
            
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    this.seleccionar_todos_productos = function () {
        try {
           
            var elementos = $('.check_p');
            var elemento2 = $('.check_cant');
            if ($("#todosP").is(':checked')) {
                $.each(elementos, function (i, val) {
                    $(this).prop('checked', true);
                });
                $.each(elemento2, function (i, val) {
                    //$(this).val(1);
                    $(this).prop('disabled', false);
                });
            } else {
                $.each(elementos, function (i, val) {
                    $(this).prop('checked', false);
                });
                $.each(elemento2, function (i, val) {
                    $(this).val(0);
                    $(this).prop('disabled', true);
                });
            }
           

        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };
    
    this.calcularvalor = function (pId_pro) {
        try {
          
            var valor = $("#valorproducto_" + pId_pro).val();
            var cant = $("#CantidadP_" + pId_pro).val();
            $("#valorP" + pId_pro).val(valor*cant);

        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    
    this.AgregarProductos = function () {
        try {
            //validamos seleccionados y valor
            var elementos = $('.check_p');
            var cantselec = 0;
            var valorvacio = 0;
            var id_p = "";
            $.each(elementos, function (i, val) {
                id_p = $(this).attr("id").replace("checkP_", "");
                if ($(this).is(':checked')) {
                    cantselec++;
                    if ($("#valorP" + id_p).val() == 0 || $("#valorP" + id_p).val() == '') {
                        valorvacio++;
                    }
                }
            });
            if (cantselec == 0) {
                Mensaje.informacion("Señor usuario debe seleccionar almenos un producto");
                return false;
            }
            if (valorvacio > 0) {
                Mensaje.informacion("Se usuario debe colocarle cantidad a los todos los productos seleccionados");
                return false;
            }


            

            //llenamos la tabla de detalle de pedido
            var vTabla = "";
            id_p = "";
            var valor_total = 0;
            var valor_pro = 0;
            var cantidad = 0;
            var txtProduct = "";
            var valor_proExistente = 0;
            var cantidadExistente = 0;
            $.each(elementos, function (i, val) {
                cantidad = "";
                valor_pro = 0;
                valor_proExistente = 0;
                cantidadExistente = 0;
                if ($(this).is(':checked')) {
                    id_p = $(this).attr("id").replace("checkP_", "");
                    if ($("#uidProdD_" + id_p).length > 0) {
                        cantidadExistente = parseInt($("#cantProdD_" + id_p).val());
                        valor_proExistente = parseInt($("#valorProdD_" + id_p).val());

                        valor_pro = parseInt($("#valorP" + id_p).val());
                        cantidad = parseInt($("#CantidadP_" + id_p).val());

                        $("#cantProdD_" + id_p).val(cantidadExistente + cantidad);
                        $("#valorProdD_" + id_p).val(valor_proExistente + valor_pro);

                        $("#cantProdD_" + id_p).css({ "background-color": " #f8c471 " });
                        $("#valorProdD_" + id_p).css({ "background-color": " #f8c471 " });
                        
                        
                        valor_total = (parseInt(valor_total) + parseInt(valor_pro));

                    } else {
                        valor_pro = parseInt($("#valorP" + id_p).val());
                        cantidad = parseInt($("#CantidadP_" + id_p).val());

                        vTabla += "<tr id='tr_PedidoM_N_" + id_p + "' style='background-color:  #82e0aa ' >" +
                            "<td><input type='text' readonly id='uidProdD_" + id_p + "' value='" + id_p + "' class='proagregar'></td>" +
                            "<td>" + $("#despP_" + id_p).val() + "</td>" +
                            "<td><input type='text' readonly id='cantProdD_" + id_p + "' value='" + cantidad + "' ></td>" +
                            "<td><input type='text' readonly id='valorProdD_" + id_p + "' value='" + valor_pro + "' class='prosuma' ></td>" +
                            "</tr>";

                        //valor_total = (parseInt(valor_total) + parseInt(valor_pro));
                    }
                } 
            });
            $("#tBodyProductosD").append(vTabla);
            
            setTimeout(function () {
                var elementos = $('.prosuma');
                $.each(elementos, function (i, val) {
                    valor_total = (parseInt(valor_total) + parseInt($(this).attr("value")));                  
                });
                $("#txtValor").val(valor_total);
                $('#modalFrmAgregarProducto').modal('hide');
            }, 500);
           

        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    //trae los producto de un pedido por id
    this.getProductoPedidoDxUid = function (id_pedidoD) {
        try {

            var pPARAMETROS = {};
            var pSRV = "pedido_detalle/?id=" + id_pedidoD;
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Productos.getProductoPedidoDxUidRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.getProductoPedidoDxUidRespuesta = function (pRetorno) {
        try {

            $("#pleaseWaitDialog").modal("hide");

            //Obtiene la informacion de los requerimientos
            var vArregloProductos = pRetorno;
            $("#txtUidPedidoD").val(vArregloProductos.uid_pedido_d);
            $("#txtUidProducto").val(vArregloProductos.uid_producto);

            var txtproducto = "";
            var valorproducto = "";
            $.each(Generico.arreglo_productos, function (index, pObjProductos) {
                if (pObjProductos.uid_producto == vArregloProductos.uid_producto) {
                    txtproducto = pObjProductos.descripcion;
                    valorproducto = pObjProductos.valor;
                }
            });

            $("#txtDescProducto").val(txtproducto);
            $("#txtCantidadD").val(vArregloProductos.cantidad);           
            $("#txtValorD").val(vArregloProductos.valor);
            $("#txtValorunitario").val(valorproducto);

            $("#modalFrmModificarEliminarProducto").modal("show");
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    this.calcularsubvalorpro = function (plemento) {
        try {
            var cant =$("#txtCantidadD").val();
            var preciounitario = $("#txtValorunitario").val();
            var valor = (parseInt(preciounitario) *parseInt(cant));
            $("#txtValorD").val(valor);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };
    //trae los productos de un pedido y lo ingresa en un arreglo
    this.getProductosPedidoDxid = function () {
        try {
            var uid_pedidoM = $("#txtUidPedidoM").val();           
            var pPARAMETROS = {};
            var pSRV = "pedido_detalle/?id=" + uid_pedidoM + "&id_PedidoM=" + uid_pedidoM;
            $("#pleaseWaitDialog").modal("show");
            General.comandoGet(Productos.getProductosPedidoDxidRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.getProductosPedidoDxidRespuesta = function (pRetorno) {
        try {

            $("#pleaseWaitDialog").modal("hide");
            Productos.arregloProductosPedidoD = pRetorno;
            Productos.AgregarProductos();
            
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    
    this.getmaxPedidoD = function (uid_PedidoM, arreglodatos) {
        try {
            var pPARAMETROS = {};
            var pPARAMETROSOPCIONAL = {
                uid_PedidoM: uid_PedidoM,
                uid_producto: arreglodatos.uid_producto,
                cantidad: arreglodatos.cantidad,
                valor: arreglodatos.valor,
                siguiente: arreglodatos.siguiente
            };
            var pSRV = "pedido_detalle/?count='si'";
            $("#pleaseWaitDialog").modal("show");
            
            General.comandoGetConParametros(Productos.setProductosxPedidoD, pPARAMETROS, pSRV, pPARAMETROSOPCIONAL );
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.setProductosxPedidoD = function (pMax_uid, arregloopcional) {
        try {
            $("#pleaseWaitDialog").modal("hide");
            var proximo = (pMax_uid + 1 + parseInt(arregloopcional.siguiente));            
            var pPARAMETROS = {
                uid_pedido_d: proximo,
                uid_pedido_m: arregloopcional.uid_PedidoM,
                uid_producto: arregloopcional.uid_producto,
                cantidad: arregloopcional.cantidad,
                valor: arregloopcional.valor,
                eliminado:null
            };
            var pSRV = "pedido_detalle";
            $("#pleaseWaitDialog").modal("show");
           General.comandoPost(Productos.setProductosxPedidoDRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };
    this.setProductosxPedidoDRespuesta = function (pRetorno) {
        try {
            $("#pleaseWaitDialog").modal("hide");
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };


    this.updateProdutoPedidoD = function (arreglodatos) {
        try {
            var pPARAMETROS = {
                uid_pedido_d: arreglodatos.uid_pedido_d,
                uid_pedido_m: arreglodatos.uid_pedido_m,
                uid_producto: arreglodatos.uid_producto,
                cantidad: arreglodatos.cantidad,
                valor: arreglodatos.valor,
                eliminado: null
            };
           
            var pSRV = "pedido_detalle/?id=" + arreglodatos.uid_pedido_d;
           // $("#pleaseWaitDialog").modal("show");
            General.comandoPut(Pedidos.updateProdutoPedidoDRespuesta, pPARAMETROS, pSRV);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    this.updateProdutoPedidoDRespuesta = function (pRetorno) {
        try {
            $("#pleaseWaitDialog").modal("hide");
            Pedidos.getDetallePedido($("#txtUidPedidoM").val());
            Mensaje.exito("se modifico el producto correctamente.");
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };
};