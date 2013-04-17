﻿//
// THIS WORK IS LICENSED UNDER A CREATIVE COMMONS ATTRIBUTION-NONCOMMERCIAL-
// SHAREALIKE 3.0 UNPORTED LICENSE:
// http://creativecommons.org/licenses/by-nc-sa/3.0/
//

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.Composition;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rock.Reporting.Dashboard
{
    [Description( "A twitter dashboard component" )]
    [Export( typeof( DashboardComponent ) )]
    [ExportMetadata( "ComponentName", "Twitter" )]
    class Twitter : DashboardComponent
    {
    }
}
