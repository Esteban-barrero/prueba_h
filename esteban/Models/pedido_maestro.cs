//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace esteban.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class pedido_maestro
    {
        public int uid_pedido_m { get; set; }
        public int uid_cliente { get; set; }
        public int uid_categoria { get; set; }
        public Nullable<int> valor_total { get; set; }
        public int uid_estado { get; set; }
        public string eliminado { get; set; }
    }
}
