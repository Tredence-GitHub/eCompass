import React from 'react';
import {Report} from 'powerbi-report-component';
import './Landing.css';
import {Button} from 'react-bootstrap';


export default function RenderPowerBi(props) {

    const groupId = 'a3d38897-e2ce-4cec-9302-e5acafabc87b';
    const embedToken = props.embedPass;
    const reportId = props.reportIdPass;

    let embedUrl = `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${groupId}`;
    embedUrl = embedUrl.replace("watch?v=", "v/");

    const filter1 = {
        $schema: "http://powerbi.com/product/schema#basic",
        target: {
            table: `${props.tablepass}`,
            column: "sku_id"
        },
        operator: "In",
        values: [`${props.sku_idpass}`]

    };

    const reportStyle = {
        height: "24rem"
    };
    const extraSettings = {
        filterPaneEnabled: false, //true
        navContentPaneEnabled: false, //true
        hideErrors: false
    };
    return (
        <div>
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
                    report.setFilters([filter1]).then((res, rej) => {
                        console.log(res)
                    }).catch(function (errors) {
                        console.log(errors)

                    });
                }
                }
            >
            </Report>
            <Button className="recommendations-btn" onClick={(e) => {
                window.location.href = "/Workbench/" + props.product_group + "/" + props.sku_idpass
            }} sku_idpass={props.sku_idpass} style={{
                float: "right",
                border: "1px solid aliceblue"
            }}>Workbench</Button>
            <Button className="recommendations-btn" onClick={(e) => {
                window.location.href = "/simulator/" + props.product_group + "/" + props.sku_idpass
            }} sku_idpass={props.sku_idpass} style={{
                float: "right",
                border: "1px solid aliceblue"
            }}>Simulator</Button>
        </div>
    )

}


