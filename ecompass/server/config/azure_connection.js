

const { BlobServiceClient } = require('@azure/storage-blob');
const uuidv1 = require('uuid/v1');
const { exception } = require('console');
const converter = require('json-2-csv');
const fs = require('fs');


async function DeleteBlobs(containerClient){
    const list_of_blobs = await containerClient.listBlobsFlat();
    console.log(list_of_blobs);

    console.log('Deleting .... ')
    const res = await containerClient.delete_blob('quickstart08977d40-cbe0-11ea-b7ab-fbdbd5024ae5.txt');
    console.log(res);
}

async function ListBlobs(containerClient){
    for await (const blob of containerClient.listBlobsFlat()){
        console.log('\t', blob.name);
    }
}


async function UploadData(containerClient){
    // Create a unique name for the blob
    const blobName = '/existfolder/'+'quickstart-todo.csv';

    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    console.log('\nUploading to Azure storage as blob:\n\t', blobName);

    // Upload data to the blob by converting it to csv
    const data = [{'name': 'Hello World!', 'example': 2}];

    (async () => {
        try{
            let data_csv = await converter.json2csvAsync(data);
            console.log(data_csv);
            const uploadBlobResponse = await blockBlobClient.upload(data_csv, data_csv.length);
     
            console.log("Blob was uploaded successfully. requestId: ", uploadBlobResponse.requestId);
        }
        catch (err) {
            console.log(err);
        }
    })();
    
}

async function UploadFiles(containerClient){
    const blobName = 'existfolder';
    console.log('Pushing files ... function')
    // Get a block blob client
    try{
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        const blockBlobClientResponse = await blockBlobClient.uploadFile('mini.csv',{blockSize: 1048});
        
        console.log("Blob FILE uploaded successfully. requestId: ", blockBlobClientResponse.requestId);
    }
    catch(err){
        console.log(err);
    }
        

}

async function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');
    // Quick start code goes here

    const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=mocktredenceaccstorage;AccountKey=EOloZjySahSTDF1OI+Jc9k6IXyy4hlV2tYBH1mFD3JZ7hChJsaflzoeQ+Cy5UiUFSp/fck50fGT4rWTovShfAg==;EndpointSuffix=core.windows.net";

    console.log("The String -- ", AZURE_STORAGE_CONNECTION_STRING);

    // Create the BlobServiceClient object which will be used to create a container client
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

    // Create a unique name for the container
    const containerName = 'quickstart';

    console.log('\nCreating container...');
    console.log('\t', containerName);

    try{
        // Get a reference to a container
        const containerClient = blobServiceClient.getContainerClient(containerName);
        if(containerClient){
            //  Let us get the container properties
            const container_properties = await containerClient.getProperties();
            
            // console.log(container_properties);
            
            // List the blobs in the container
            // console.log('Listing the blobs ... ');
            // as listing blobs takes time we are going to sync the process by using 'await' and then 'upload'
            // await ListBlobs(containerClient);

            // uploading a new blob
            // await UploadData(containerClient);

            console.log('Block files ... ')
            await UploadFiles(containerClient);

            // delete the blob contents
            // await DeleteBlobs(containerClient); // not working currently
        }
    }
    catch(exception){
        // Create the container
        const createContainerResponse = await containerClient.create();
        console.log("Container was created successfully. requestId: ", createContainerResponse.requestId);
    }
    
    
}

main().then(() => console.log('Done')).catch((ex) => console.log("This is the final ex -- ", ex.message));