General = new function () {
   
    this._exception = null;
    this._rutaservidowebApi = "http://localhost:52564//api/";

    this.comandoPut = function (fnRespuesta, pPARAMETROS, pSRV) {

        var self = this;
        try {
            $.ajax({

                type: 'PUT',
                cache: false,
                url: this._rutaservidowebApi + "" + pSRV,
                data: pPARAMETROS,
                dataType: "json",
                success: function (response) {
                    try {
                        fnRespuesta(response);
                    } catch (e) {
                        self._exception(e);
                    }
                },
                error: function (x, y, z) {
                    console.log(x);
                    console.log(z);
                    console.log(y);
                    alert(x);
                }
            });

        } catch (e) {
            self._exception(e);
        }
    };

    this.comandoGet = function (fnRespuesta, pPARAMETROS, pSRV) {
      
        var self = this;
        try {
            $.ajax({
              
                type: 'GET',
                cache: false,
                url: this._rutaservidowebApi + "" + pSRV,
                data: pPARAMETROS,
                dataType: "json",
                success: function (response) {
                    try {
                        fnRespuesta(response);
                    } catch (e) {
                        self._exception(e);
                    }
                },
                error: function (x,y,z) {                   
                    console.log(x);
                    console.log(z);
                    console.log(y);
                    alert(x);
                }
            });

        } catch (e) {
            self._exception(e);
        }
    };

    this.comandoPost = function (fnRespuesta, pPARAMETROS, pSRV) {
        var self = this;
        try {
            
            $.ajax({
                type: 'POST',
                cache: false,
                url: this._rutaservidowebApi + "" + pSRV,
                data: pPARAMETROS,
                dataType: "json",
                success: function (response) {
                    try {
                        fnRespuesta(response);
                    } catch (e) {
                        self._exception(e);
                    }
                },
                error: function (x, y, z) {
                    console.log(x);
                    console.log(z);
                    console.log(y);
                    alert(x);
                }
            });

        } catch (e) {
            Mensaje.excepcion(e);
        }
    };

    this.comandoGetConParametros = function (fnRespuesta, pPARAMETROS, pSRV, pArregloParametrosOpcionales) {
        var self = this;
        try {
              $.ajax({
                type: 'GET',
                cache: false,
                url: this._rutaservidowebApi + "" + pSRV,
                data: pPARAMETROS,
                dataType: "json",
                success: function (response) {
                    try {
                        fnRespuesta(response, pArregloParametrosOpcionales);
                    } catch (e) {
                        self._exception(e);
                    }
                },
                error: function (x,y,z) {                   
                    console.log(x);
                    console.log(z);
                    console.log(y);
                    alert(x);
                }
            });

        } catch (e) {
            Mensaje.excepcion(e);
        }
    };

    this.comandoPostConParametros = function (fnRespuesta, pPARAMETROS, pSRV, pArregloParametrosOpcionales) {
        var self = this;
        try {
            $.ajax({
                type: 'POST',
                url: pSRV,
                data: pPARAMETROS,
                dataType: "json",
                success: function (response) {
                    try {
                        fnRespuesta(response, pArregloParametrosOpcionales);
                    } catch (e) {
                        Mensaje.excepcion(e);
                    }
                }
            });

        } catch (e) {
            Mensaje.excepcion(e);
        }
    };

    this._exception = function (e) {
        Mensaje.excepcion(e);
        return;
    };

    this.validarCamposRequeridos = function () {
        try{
            var continuar = true;
            var vImputs = $('input[requerido="true"]');
            var vSelects = $('select[requerido="true"]');
            var vTextArea = $('textarea[requerido="true"]');

            $(".requerido").each(function () {
                $(this).removeClass("requerido");
                $("#req_" + $(this).attr("id")).css("display", "none");
            });

            vImputs.each(function (index, ele) {
                var elem = $(ele);                
                                                
                if(elem.val() == "")
                {
                    continuar = false;
                    elem.addClass("requerido");
                    $("#req_" + elem.attr("id")).css("display", "block");
                }
            });

            vSelects.each(function (index, ele) {
                var elem = $(ele);

                if (elem.val() == "-1") {
                    continuar = false;
                    elem.addClass("requerido");
                    $("#req_" + elem.attr("id")).css("display", "block");
                }
            });

            vTextArea.each(function (index, ele) {
                var elem = $(ele);

                if (elem.val() == "") {
                    continuar = false;
                    elem.addClass("requerido");
                    $("#req_" + elem.attr("id")).css("display", "block");
                }
            });

            return continuar;
        }
        catch (e) {
            Mensaje.excepcion(e);
        }
    };

    this.limpiarCampos = function () {
        try {
            var continuar = true;
            var vImputs = $('input[type=text]');
            var vSelects = $('select');
            var vTextArea = $('textarea');
            var vCheck = $('input[type=checkbox]');

            $(".requerido").each(function () {
                $(this).removeClass("requerido");
                $("#req_" + $(this).attr("id")).css("display", "none");
            });
            
            vTextArea.each(function (index, ele) {
                var elem = $(ele);
                elem.val("");
            });

            vImputs.each(function (index, ele) {
                var elem = $(ele);
                elem.val("");
            });

            vSelects.each(function (index, ele) {
                var elem = $(ele);
                //Obtiene el valor del option marcado por defecto
                var sel = $("select#" + elem.attr("id") + " option[selected]").attr("value");                
                elem.val(sel);
            });

            vCheck.each(function (index, ele) {
                var elem = $(ele);
                $('#' + elem.attr("id")).prop('checked', false);                
            });

            return continuar;
        }
        catch (e) {
            Mensaje.excepcion(e);
        }
    };

    this.HabilitarInhabiliatCampos = function (pOpcion) {
        try {
            var continuar = true;
            var vImputs = $('input[type=text]');
            var vSelects = $('select');
            var vTextArea = $('textarea');
            var vCheck = $('input[type=checkbox]');
           
            vTextArea.each(function (index, ele) {
                var elem = $(ele);

                if (pOpcion)
                {
                    elem.attr("disabled", "disabled");
                }
                else
                {
                    elem.removeAttr("disabled");
                }
                
            });

            vImputs.each(function (index, ele) {
                var elem = $(ele);
                if (pOpcion) {
                    elem.attr("disabled", "disabled");
                }
                else {
                    elem.removeAttr("disabled");
                }
            });

            vSelects.each(function (index, ele) {
                var elem = $(ele);
                if (pOpcion) {
                    elem.attr("disabled", "disabled");
                }
                else {
                    elem.removeAttr("disabled");
                }
            });            

            vCheck.each(function (index, ele) {
                var elem = $(ele);

                if (pOpcion) {
                    elem.attr("disabled", "disabled");
                }
                else {
                    elem.removeAttr("disabled");
                }
            });

            return continuar;
        }
        catch (e) {
            Mensaje.excepcion(e);
        }
    };

    this.solonumeros = function (e, tipo, op, tam) {
        var charCode;
        if (navigator.appName == "Netscape") // me fijo 
            charCode = e.which; // leo la tecla en ASCII que ingreso
        else
            charCode = e.keyCode;

        if (op.value.length == tam && tam > 0) {
            if (charCode == 8 || charCode == 0)
                return true;
            else {
                alert('La cantidad ingresada no debe superar los ' + tam + ' digitos');
                return false;
            }
        }
        else {
            if (tipo == 2) {
                if (charCode < 48 || charCode > 57) {
                    if (charCode < 48 && (charCode > 46 || charCode < 46)) {
                        if (charCode == 8 || charCode == 0)
                            return true;
                        else {
                            alert("Solo pueden ser numeros o puntos");
                            return false;
                        }
                    }
                    else
                        if (charCode > 57) {
                            if (charCode == 8 || charCode == 0)
                                return true;
                            else {
                                alert("Solo pueden ser numeros o puntos");
                                return false;
                            }

                        }
                }
            }
            else
                if ((charCode < 48 || charCode > 57) && charCode != 13) {
                    if (charCode == 8 || charCode == 0)
                        return true;
                    else {
                        MensajeBootstrap.informacion("Solo pueden ser numeros");
                        return false;
                    }
                }
        }
    };
}