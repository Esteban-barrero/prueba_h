#pragma checksum "C:\Users\esteb\source\repos\esteban\WebPresentacion\Pages\Views\pedidos\pedidos.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8c06f20154b353b9274162686951abea1c5ff6b1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(WebPresentacion.Pages.Views.pedidos.Pages_Views_pedidos_pedidos), @"mvc.1.0.razor-page", @"/Pages/Views/pedidos/pedidos.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Views/pedidos/pedidos.cshtml", typeof(WebPresentacion.Pages.Views.pedidos.Pages_Views_pedidos_pedidos), null)]
namespace WebPresentacion.Pages.Views.pedidos
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\esteb\source\repos\esteban\WebPresentacion\Pages\_ViewImports.cshtml"
using WebPresentacion;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8c06f20154b353b9274162686951abea1c5ff6b1", @"/Pages/Views/pedidos/pedidos.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"152f3b0f67f3286cf414c529a8a1c15a82f58001", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Views_pedidos_pedidos : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(35, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("scripts", async() => {
                BeginContext(60, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(66, 72, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9092c4d5a1fe448cbc2cd5709dcff623", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "src", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                AddHtmlAttributeValue("", 79, "~/js/pedidos/pedidos.js?", 79, 24, true);
#line 8 "C:\Users\esteb\source\repos\esteban\WebPresentacion\Pages\Views\pedidos\pedidos.cshtml"
AddHtmlAttributeValue("", 103, DateTime.Now.ToBinary(), 103, 24, false);

#line default
#line hidden
                EndAddHtmlAttributeValues(__tagHelperExecutionContext);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(138, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(144, 76, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f3c38ad9df6b47babc9eb6047185a30b", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "src", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                AddHtmlAttributeValue("", 157, "~/js/productos/productos.js?", 157, 28, true);
#line 9 "C:\Users\esteb\source\repos\esteban\WebPresentacion\Pages\Views\pedidos\pedidos.cshtml"
AddHtmlAttributeValue("", 185, DateTime.Now.ToBinary(), 185, 24, false);

#line default
#line hidden
                EndAddHtmlAttributeValues(__tagHelperExecutionContext);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(220, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            BeginContext(225, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(501, 4963, true);
            WriteLiteral(@"<div class=""container"" style=""width:100%; margin-right:0px;margin-left:0px;max-width:100%;"">
    <br />
    <div class=""card"" style=""width:100%"">
        <div class=""card-header"">
            Pedidos maestro
        </div>
        <div class=""card-body"">
            <table border=""0"" style=""width:100%"">
                <tr>
                    <td>
                        <br />
                        <div class=""panel panel-default"">
                            <div class=""panel-body"">
                                <table style=""width:100%"" border=""0"">
                                    <tr>
                                        <td width=""30%"">
                                            <table>
                                                <tr>
                                                    <td style=""vertical-align:middle"">
                                                        Lista pedidos
                                                    </td>
                      ");
            WriteLiteral(@"                              <td>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                    </td>
                                                    <td style=""display:block"">
                                                        <div>
                                                            <button type=""button""
                                                                    class=""btn btn-secondary""
                                                                    id=""btnCrear""
                                                                    name=""btnCrear""
                                                                    data-toggle=""modal""
                                                                    data-target=""#flipFlop""
                                                                    style=""display:block"">
                                                                Crear
             ");
            WriteLiteral(@"                                               </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width=""70%"">
                                            <table border=""0"" style=""width:100%"">
                                                <tr>
                                                    <td width=""90%"">
                                                        <div class=""input-group"">
                                                            <span class=""input-group-addon""><i class=""glyphicon glyphicon-search""></i></span>
                                                            <input id=""txtFiltro"" type=""text"" class=""form-control"" name=""txtFiltro"" placeholder=""Filtro"">
                                         ");
            WriteLiteral(@"               </div>
                                                    </td>
                                                    <td width=""10%"" align=""center"">
                                                        <button type=""button"" class=""btn btn-secondary"" id=""btnFiltrar"" name=""btnFiltrar"" onclick=""Pedidos.getPedidosM_filtro();"">Filtrar</button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class=""panel panel-default"">
                            <div class=""panel-body"">
                                <table class=""table table-hover"" id=""tblPedidosM"" ");
            WriteLiteral(@"name=""tblPedidosM"">
                                    <thead>
                                        <tr>
                                            <th scope=""col""># Pedido</th>
                                            <th scope=""col"">cliente</th>
                                            <th scope=""col"">categoria</th>
                                            <th scope=""col"">Valor</th>
                                            <th scope=""col"">estado</th>
                                        </tr>
                                    </thead>
                                    <tbody id=""tBodyPedidosM""></tbody>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>

");
            EndContext();
            BeginContext(5635, 3090, true);
            WriteLiteral(@"<div class=""modal fade bd-example-modal-xl"" tabindex=""-1"" role=""dialog"" aria-labelledby=""myExtraLargeModalLabel"" aria-hidden=""true"" id=""modalFrmMaterPedido"" data-backdrop=""static"" data-keyboard=""false"">
    <div class=""modal-dialog"" style=""max-width:100%; width:95%;"">
        <!-- Modal content-->
        <div class=""modal-content"">
            <div class=""modal-header"" style=""background-color: rgba(0,0,0,.03);"">
                <table style=""width:100%;"" border=""0"">
                    <tr>
                        <td style=""width:95%"" align=""center"">
                            <h5 class=""modal-title"">Pedido Detalle</h5>
                        </td>
                        <td style=""width:5%"">
                            <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                                <span aria-hidden=""true"">&times;</span>
                            </button>
                        </td>
                    </tr>
                </table>
    ");
            WriteLiteral(@"        </div>
            <div class=""modal-body"">
                <div class=""panel panel-default"">
                    <div class=""panel-body"">
                        <table>
                            <tr>

                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td style=""display:block"">
                                    <button type=""button"" class=""btn btn-secondary"" id=""btnGuardar"" name=""btnGuardar"" style=""display:block""> Guardar  </button>
                                </td>
                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td>
                                    <button type=""button"" class=""btn btn-secondary"" id=""btnCancelar"" name=""btnCancelar"" onclick=""$('#modalFrmMaterPedido').modal('hide')"">Cancelar</button>
                                </td>
");
            WriteLiteral(@"                            </tr>
                        </table>

                    </div>
                </div>
                <div class=""panel panel-default"">
                    <div class=""modal-body"">
                        <table style=""width:100%"" border=""0"">
                            <tr>
                                <td>
                                    <input type=""text"" id=""txtUidPedidoM"" style=""display:none;"" />
                                </td>
                            </tr>
                            <tr>


                                <td width=""5%"" style=""text-align:right;"">
                                    <label class=""col-sm- control-label"">Cliente</label>
                                </td>
                                <td width=""20%"">
                                    <div class=""col-sm-10"">
                                        <select class=""form-control"" id=""cmbCliente"" style=""width:100%;""></select>
                          ");
            WriteLiteral("          </div>\r\n");
            EndContext();
            BeginContext(9059, 518, true);
            WriteLiteral(@"                                </td>
                                <td width=""5%"" style=""text-align:right;"">
                                    <label class=""col-sm- control-label"">Categoria</label>
                                </td>
                                <td width=""20%"">
                                    <div class=""col-sm-10"">
                                        <select class=""form-control"" id=""cmbCategoria"" style=""width:100%;""></select>
                                    </div>
");
            EndContext();
            BeginContext(9918, 521, true);
            WriteLiteral(@"                                </td>
                                <td width=""5%"" style=""text-align:right;"">
                                    <label class=""col-sm- control-label"">Estado</label>
                                </td>
                                <td width=""15%"">
                                    <div class=""col-sm-10"">
                                        <select class=""form-control"" id=""cmbEstado"" style=""width:100%;"" disabled></select>
                                    </div>
");
            EndContext();
            BeginContext(10773, 554, true);
            WriteLiteral(@"                                </td>
                                <td width=""5%"" style=""text-align:right;"">
                                    <label class=""col-sm- control-label"">Valor</label>
                                </td>
                                <td width=""15%"">
                                    <div class=""col-sm-10"">
                                        <input class=""form-control"" requerido=""false"" type=""text"" id=""txtValor"" maxlength=""16"" readonly style=""width:100%;"">
                                    </div>
");
            EndContext();
            BeginContext(11666, 790, true);
            WriteLiteral(@"                                </td>
                                <td width=""5%"">
                                    <a href=""#"" class=""btn btn-info btn-lg"" id=""btnAgregarProducto"" name=""btnAgregarProducto"">
                                        <span class=""glyphicon glyphicon-plus""></span>Productos
                                    </a>
                                </td>
                            </tr>


                        </table>
                    </div>
                </div>
                <div class=""panel panel-default"">
                    <div class=""panel-body"">
                        <table class=""table table-hover"" id=""tblProductosD"" name=""tblProductosD"">
                            <thead>
                                <tr>
");
            EndContext();
            BeginContext(12656, 559, true);
            WriteLiteral(@"                                    <th scope=""col""># Producto</th>
                                    <th scope=""col"">Descripcion</th>
                                    <th scope=""col"">Cantidad</th>
                                    <th scope=""col"">valor</th>
                                </tr>
                            </thead>
                            <tbody id=""tBodyProductosD""></tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

");
            EndContext();
            BeginContext(13371, 5340, true);
            WriteLiteral(@"<div class=""modal fade bd-example-modal-xl"" tabindex=""-1"" role=""dialog"" aria-labelledby=""myExtraLargeModalLabel"" aria-hidden=""true"" id=""modalFrmAgregarProducto"" data-backdrop=""static"" data-keyboard=""false"">
    <div class=""modal-dialog"" style=""max-width:100%; width:95%;"">
        <!-- Modal content-->
        <div class=""modal-content"">
            <div class=""modal-header"" style=""background-color: rgba(0,0,0,.03);"">
                <table style=""width:100%;"" border=""0"">
                    <tr>
                        <td style=""width:95%"" align=""center"">
                            <h5 class=""modal-title"">Agregar Producto</h5>
                        </td>
                        <td style=""width:5%"">
                            <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                                <span aria-hidden=""true"">&times;</span>
                            </button>
                        </td>
                    </tr>
                </table>");
            WriteLiteral(@"
            </div>
            <div class=""modal-body"">
                <div class=""panel panel-default"">
                    <div class=""panel-body"">
                        <table>
                            <tr><td>
                                    <input type=""text"" id=""txtUidPedidoMP"" style=""display:none;"" />
                                </td>                                
                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td style=""display:block"">
                                    <button type=""button"" class=""btn btn-secondary"" id=""btnAgregarProducto"" name=""btnAgregarProducto"" style=""display:block"" onclick=""Productos.getProductosPedidoDxid();""> Agregar </button>
                                </td>
                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                         ");
            WriteLiteral(@"       <td>
                                    <button type=""button"" class=""btn btn-secondary"" id=""btnCancelar"" name=""btnCancelar"" onclick=""$('#modalFrmAgregarProducto').modal('hide')"">Cancelar</button>
                                </td>
                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td width=""90%"">
                                    <table border=""0"" style=""width:100%"">
                                        <tr>
                                            <td width=""90%"">
                                                <div class=""input-group"">
                                                    <span class=""input-group-addon""><i class=""glyphicon glyphicon-search""></i></span>
                                                    <input id=""txtFiltroProduto"" type=""text"" class=""form-control"" name=""txtFiltroProduto"" placeholder=""buscar Producto"">
                           ");
            WriteLiteral(@"                     </div>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                            </td>
                                            <td width=""10%"" align=""center"">
                                                <button type=""button"" class=""btn btn-secondary"" id=""btnFiltrarProductos"" name=""btnFiltrarProductos"" onclick=""Productos.getProductosxCategoriaxnombre();"">Filtrar</button>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
                <div class=""panel panel-default"">
                    <div class=""panel-body"">
                        <table class=""table table-hover"" id=""tblProduc");
            WriteLiteral(@"tos"" name=""tblProductos"">
                            <thead>
                                <tr>
                                    <th scope=""col"" style=""display:none""># Pedido Detalle</th>
                                    <th scope=""col"" style=""display:none""># Pedido maestro</th>
                                    <th scope=""col""><input type=""checkbox"" onclick=""Productos.seleccionar_todos_productos()"" id=""todosP"" name=""todosP""></th>
                                    <th scope=""col""># Producto</th>
                                    <th scope=""col"">Descripcion</th>
                                    <th scope=""col"">Categoria</th>
                                    <th scope=""col"" style=""display:none"">Stock</th>
                                    <th scope=""col"">valor</th>
                                    <th scope=""col"">Cantidad solicitada</th>
                                    <th scope=""col"">sub Total</th>
                                </tr>
                            </t");
            WriteLiteral("head>\r\n                            <tbody id=\"tBodyProductos\"></tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");
            EndContext();
            BeginContext(18897, 8274, true);
            WriteLiteral(@"<div class=""modal fade bd-example-modal-xl"" tabindex=""-1"" role=""dialog"" aria-labelledby=""myExtraLargeModalLabel"" aria-hidden=""true"" id=""modalFrmModificarEliminarProducto"" data-backdrop=""static"" data-keyboard=""false"">
    <div class=""modal-dialog"" style=""max-width:100%; width:95%;"">
        <!-- Modal content-->
        <div class=""modal-content"">
            <div class=""modal-header"" style=""background-color: rgba(0,0,0,.03);"">
                <table style=""width:100%;"" border=""0"">
                    <tr>
                        <td style=""width:95%"" align=""center"">
                            <h5 class=""modal-title"">Modificar Producto</h5>
                        </td>
                        <td style=""width:5%"">
                            <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                                <span aria-hidden=""true"">&times;</span>
                            </button>
                        </td>
                    </tr>
            ");
            WriteLiteral(@"    </table>
            </div>
            <div class=""modal-body"">
                <div class=""panel panel-default"">
                    <div class=""panel-body"">
                        <table>
                            <tr>

                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td style=""display:block"">
                                    <button type=""button"" class=""btn btn-secondary"" id=""btnModificarProducto"" name=""btnModificarProducto"" style=""display:block"" onclick=""Pedidos.ModificarProductoPedidod();""> Modificar  </button>
                                </td>
                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td style=""display:block"">
                                    <button type=""button"" class=""btn btn-secondary"" id=""btnEliminarProducto"" name=""btnEl");
            WriteLiteral(@"iminarProducto"" style=""display:block"" onclick=""Pedidos.EliminarProductoPedidod();""> Eliminar  </button>
                                </td>
                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td>
                                    <button type=""button"" class=""btn btn-secondary"" id=""btnCancelar"" name=""btnCancelar"" onclick=""$('#modalFrmModificarEliminarProducto').modal('hide')"">Cancelar</button>
                                </td>
                                <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                            </tr>
                        </table>

                    </div>
                    <div class=""panel panel-default"">
                        <div class=""modal-body"">
                            <table style=""width:100%"" border=""0"">
                                <tr>
             ");
            WriteLiteral(@"                       <td>
                                        <input type=""text"" id=""txtUidPedidoM"" style=""display:none;"" />
                                        <input type=""text"" id=""txtUidPedidoD"" style=""display:none;"" />
                                        <input type=""text"" id=""txtUidProducto"" style=""display:none;"" />
                                    </td>
                                </tr>
                                <tr>
                                    <td width=""5%"" style=""text-align:right;"">
                                        <label class=""col-sm- control-label"">Descripcion</label>
                                    </td>
                                    <td width=""25%"">
                                        <div class=""col-sm-10"">
                                            <input class=""form-control"" requerido=""false"" type=""text"" id=""txtDescProducto"" maxlength=""16"" readonly style=""width:100%;"">
                                        </div>
      ");
            WriteLiteral(@"                              </td>
                                    <td width=""8%"" style=""text-align:right;"">
                                        <label class=""col-sm- control-label"">varlor unitario</label>
                                    </td>
                                    <td width=""20%"">
                                        <div class=""col-sm-10"">
                                            <input class=""form-control"" requerido=""false"" type=""text"" id=""txtValorunitario"" maxlength=""16"" readonly style=""width:100%;"">
                                        </div>
                                    </td>
                                    <td width=""5%"" style=""text-align:right;"">
                                        <label class=""col-sm- control-label"">Cantidad</label>
                                    </td>
                                    <td width=""10%"">
                                        <div class=""col-sm-10"">
                                            <in");
            WriteLiteral(@"put class=""form-control"" requerido=""false"" type=""number"" id=""txtCantidadD"" maxlength=""16"" style=""width:100%;"" onchange=""Productos.calcularsubvalorpro();"">
                                        </div>
                                    </td>
                                    <td width=""5%"" style=""text-align:right;"">
                                        <label class=""col-sm- control-label"">Valor</label>
                                    </td>
                                    <td width=""20%"">
                                        <div class=""col-sm-10"">
                                            <input class=""form-control"" requerido=""false"" type=""text"" id=""txtValorD"" maxlength=""16"" readonly style=""width:100%;"" >
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        ");
            WriteLiteral(@"</div>
    </div>
</div>

<script type=""text/javascript"">
    $(document).ready(function () {


        Generico.getListaClientes(""cmbCliente"", """");
        Generico.getListaCategoria(""cmbCategoria"", """");
        Generico.getListaEstado(""cmbEstado"", 1);
        Generico.getListaProductos("""", """");


        //$(""#modalFrmMaterPedido"").modal(""show"");
        $(""#btnCrear"").click(function () {
            General.limpiarCampos();
            $(""#modalFrmMaterPedido"").modal(""show"");
            $(""#txtUidPedidoM"").val(""-1"");
            $(""#cmbEstado"").val(""1"");
            $(""#tBodyProductosD"").html("""");
            $(""#cmbCategoria"").prop('disabled', false);
            $(""#cmbCliente"").prop('disabled', false);
            $(""#cmbEstado"").prop('disabled', true);


        });

        $(""#btnAgregarProducto"").click(function () {
            // General.limpiarCampos();
           
            if ($(""#cmbEstado"").val() != 1) {
                Mensaje.informacion(""en el estado actua");
            WriteLiteral(@"l del pedido no se pueden agregar productos"");
                return false;
            }

            $(""#todosP"").prop('checked', false);
            if ($(""#cmbCliente"").val() == -1) {
                Mensaje.informacion(""Señor usuario ingrese el cliente"");
                return false;
            }
            if ($(""#cmbCategoria"").val() == -1) {
                Mensaje.informacion(""Señor usuario ingrese la categoria"");
                return false;
            }
            Productos.getProductosxCategoria($(""#cmbCategoria"").val());
            $(""#modalFrmAgregarProducto"").modal(""show"");
            $(""#txtUidProducto"").val(""-1"");
        });


        $(""#btnGuardar"").click(function () {
            console.log($(""#txtUidPedidoM"").val());
            if ($(""#txtUidPedidoM"").val() == '-1') {
                Pedidos.getmaxPedidoM();
            } else {
                Pedidos.ModificarPedidoM();
            }
           

        });

        setTimeout(function () {
  ");
            WriteLiteral("          Pedidos.getPedidosM();\r\n        }, 1000);\r\n       \r\n\r\n    });\r\n</script>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<pedidosModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<pedidosModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<pedidosModel>)PageContext?.ViewData;
        public pedidosModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591