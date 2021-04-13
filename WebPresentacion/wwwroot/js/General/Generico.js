Generico = new function () {
    
    var vFuncionPos;
    this.arreglo_clientes;
    this.arreglo_categorias;
    this.arreglo_estados;
    this.arreglo_productos;
    this.constructor = function (pFuncionPos) {
        this.vFuncionPos = pFuncionPos;
    };
    
    //Funcion que obtiene los registros de Clientes
    this.getListaClientes = function (pId_Combo, pId_default) {
        try {
            var pPARAMETROS = {};
            var pPARAMETROS_ADICIONALES = { "id_combo": pId_Combo, "id_default": pId_default};
            var pSRV = "Clientes?eliminado=''";

            $("#pleaseWaitDialog").modal("show");
            General.comandoGetConParametros(Generico.getListaClientesRespuesta, pPARAMETROS, pSRV, pPARAMETROS_ADICIONALES );
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de cargar la lista de clientes
    this.getListaClientesRespuesta = function (pRetorno, pParametros) {
        try {
            Generico.arreglo_clientes = pRetorno;
            $("#pleaseWaitDialog").modal("hide");
            var vArregloClientes = pRetorno;          
            var vOptions = '<option value="-1" selected>--Seleccione un Cliente--</option>"';
            $.each(vArregloClientes, function (index, pObj) {                
                if (pObj.uid_cliente == pParametros.id_default) {
                    vOptions += '<option value="' + pObj.uid_cliente + '" selected>' + pObj.nombre + '</option>"';
                } else {
                    vOptions += '<option value="' + pObj.uid_cliente + '">' + pObj.nombre + '</option>"';
                }
                
            });
            $("#" + pParametros.id_combo).html(vOptions);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };

    //Funcion que obtiene los registros de categorias
    this.getListaCategoria = function (pId_Combo, pId_default) {
        try {
            var pPARAMETROS = {};
            var pPARAMETROS_ADICIONALES = { "id_combo": pId_Combo, "id_default": pId_default };
            var pSRV = "Categorias?eliminado=''";

            $("#pleaseWaitDialog").modal("show");
            General.comandoGetConParametros(Generico.getListaCategoriaRespuesta, pPARAMETROS, pSRV, pPARAMETROS_ADICIONALES);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de cargar la lista de categorias
    this.getListaCategoriaRespuesta = function (pRetorno, pParametros) {
        try {
            Generico.arreglo_categorias = pRetorno;
            $("#pleaseWaitDialog").modal("hide");
            var vArregloClientes = pRetorno;
            var vOptions = '<option value="-1" selected>--Seleccione una Categoria--</option>"';
            $.each(vArregloClientes, function (index, pObj) {
                if (pObj.uid_categoria == pParametros.id_default) {
                    vOptions += '<option value="' + pObj.uid_categoria + '" selected>' + pObj.descripcion + '</option>"';
                } else {
                    vOptions += '<option value="' + pObj.uid_categoria + '">' + pObj.descripcion + '</option>"';
                }
                
            });
            $("#" + pParametros.id_combo).html(vOptions);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };


    //Funcion que obtiene los registros de estados
    this.getListaEstado = function (pId_Combo, pId_default) {
        try {
            var pPARAMETROS = {};
            var pPARAMETROS_ADICIONALES = { "id_combo": pId_Combo, "id_default": pId_default };
            var pSRV = "Estados?eliminado=''";

            $("#pleaseWaitDialog").modal("show");
            General.comandoGetConParametros(Generico.getListaEstadoRespuesta, pPARAMETROS, pSRV, pPARAMETROS_ADICIONALES);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de cargar la lista de estados
    this.getListaEstadoRespuesta = function (pRetorno, pParametros) {
        try {
            Generico.arreglo_estados = pRetorno;
            $("#pleaseWaitDialog").modal("hide");
            var vArregloClientes = pRetorno;
            var vOptions = '<option value="-1" selected>--Seleccione un Estado--</option>"';
            $.each(vArregloClientes, function (index, pObj) {
                if (pObj.uid_estado == pParametros.id_default) {
                    vOptions += '<option value="' + pObj.uid_estado + '" selected>' + pObj.descripcion + '</option>"';
                } else {
                    vOptions += '<option value="' + pObj.uid_estado + '">' + pObj.descripcion + '</option>"';
                }
                
            });
            $("#" + pParametros.id_combo).html(vOptions);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };



    //Funcion que obtiene los registros de productos
    this.getListaProductos = function (pId_Combo, pId_default) {
        try {
            var pPARAMETROS = {};
            var pPARAMETROS_ADICIONALES = { "id_combo": pId_Combo, "id_default": pId_default };
            var pSRV = "Productos";

            $("#pleaseWaitDialog").modal("show");
            General.comandoGetConParametros(Generico.getListaProductosRespuesta, pPARAMETROS, pSRV, pPARAMETROS_ADICIONALES);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de cargar la lista de productos
    this.getListaProductosRespuesta = function (pRetorno, pParametros) {
        try {
            Generico.arreglo_productos = pRetorno;
            $("#pleaseWaitDialog").modal("hide");
            var vArregloProductos = pRetorno;
            var vOptions = '<option value="-1" selected>--Seleccione un Producto--</option>"';
            $.each(vArregloProductos, function (index, pObj) {
                if (pObj.uid_producto == pParametros.id_default) {
                    vOptions += '<option value="' + pObj.uid_producto + '" selected>' + pObj.descripcion + '</option>"';
                } else {
                    vOptions += '<option value="' + pObj.uid_producto + '">' + pObj.descripcion + '</option>"';
                }

            });
            $("#" + pParametros.id_combo).html(vOptions);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };


    //*************************************************************************************
    //Funcion que obtiene los registros de ciudades
    this.getListaDinamicaXTipo = function (pTipo, pComboId) {
        try {
            var pPARAMETROS = { pTipo: pTipo };
            var pSRV = "Generico/getListasEstaticasParaCombo";
            var vArrPar = new Array();
            vArrPar.push(pComboId);

            $("#pleaseWaitDialog").modal("show");
            General.comandoPostConParametros(Generico.getListaDinamicaXTipoRespuesta, pPARAMETROS, pSRV, vArrPar);
        }
        catch (e) {
            Mensaje.excepcion(e.message);
            return false;
        }
    };

    //Funcion que se encarga de mostrar la informacion de registros en los campos del grid
    this.getListaDinamicaXTipoRespuesta = function (pRetorno, pArregloParametrosOpcionales) {
        try {
            var vIdCombo = pArregloParametrosOpcionales[0];

            $("#pleaseWaitDialog").modal("hide");
            

            if (!pRetorno.IsOk) {
                MensajeBootstrap.error(pRetorno.Message);
                return;
            }

            //Obtiene los departmantos
            var vDeptos = pRetorno.Retorno;
            var vOptions = '<option value="-1" selected>--Seleccione una opción--</option>"';

            $.each(vDeptos, function (index, pObj) {

                vOptions += '<option value="' + pObj.Valor + '">' + pObj.Nombre + '</option>"';
            });

            $("#" + vIdCombo).html(vOptions);
        }
        catch (e) {
            MensajeBootstrap.error(e);
            return false;
        }
    };
};