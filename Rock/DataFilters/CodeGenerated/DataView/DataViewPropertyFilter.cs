
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by the Rock.CodeGeneration project
//     Changes to this file will be lost when the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
//
// THIS WORK IS LICENSED UNDER A CREATIVE COMMONS ATTRIBUTION-NONCOMMERCIAL-
// SHAREALIKE 3.0 UNPORTED LICENSE:
// http://creativecommons.org/licenses/by-nc-sa/3.0/
//
using System.ComponentModel;
using System.ComponentModel.Composition;

namespace Rock.DataFilters.DataView
{
    /// <summary>
    /// DataView Property Filter
    /// </summary>
    [Description( "Filter Data Views based on any DataView property or attribute value" )]
    [Export( typeof( DataFilterComponent ) )]
    [ExportMetadata( "ComponentName", "DataView Property Filter" )]
    public partial class DataViewPropertyFilter : PropertyFilter<Rock.Model.DataView>
    {
    }
}