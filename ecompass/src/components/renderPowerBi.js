import React from 'react';
import {Report} from 'powerbi-report-component';


export default function RenderPowerBi(props) {

    const groupId = 'a3d38897-e2ce-4cec-9302-e5acafabc87b';
    const embedToken = props.embedPass;
    const reportId = props.reportIdPass;
    // if(true){
    // console.log('IN RENDER !!!!!!', props)
    
    // }
    let embedUrl = `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${groupId}`;
      const embedToken = embeddingToken;
      embedUrl = embedUrl.replace("watch?v=", "v/");

      const reportStyle = {
          height: "18rem"
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
                    report = report;

                    }
                    }
    
          ></Report>
      )
   
}
