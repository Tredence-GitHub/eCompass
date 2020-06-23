import React from 'react';
import {Report} from 'powerbi-report-component';


export default function RenderPowerBi(props) {

    const groupId = 'a3d38897-e2ce-4cec-9302-e5acafabc87b';
    const embedToken = props.embedPass;
    const reportId = props.reportIdPass;
    
    let embedUrl = `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${groupId}`;
      embedUrl = embedUrl.replace("watch?v=", "v/");

      const filter1 = {
        $schema: "http://powerbi.com/product/schema#basic",
        target: {
            table: `${props.tablepass}` ,
            column: "sku_id"
        },
        operator: "In",
        values: [`${props.sku_idpass}`]
        
    };

      const reportStyle = {
          height: "24.2rem"
      };
      const extraSettings = {
          filterPaneEnabled: false, //true
          navContentPaneEnabled: false, //true
          hideErrors: false
      };
      return (
                <Report
                embedType="report" // "dashboard"
                tokenType="Embed" // "Aad"
                accessToken={embedToken} // accessToken goes here
                embedUrl={embedUrl} // embedUrl goes here
                embedId={reportId}
                permissions="All" // View
                style={reportStyle}
                extraSettings={extraSettings}
                onLoad={(report) => {
                    console.log(filter1,"ABC")
                    report.setFilters([filter1]).then((res, rej) => {
                        console.log(res,"******")
                        console.log(rej)
    
                       }).catch(function (errors) {
                           console.log(errors)
                         
                       });
                    // report.getFilters().then(function (filters) {
                    
                    // }).catch(function (errors) {
                     
                    // })
 
                    
                    

                    

                    }
                }

    
          ></Report>
      )
   
}


