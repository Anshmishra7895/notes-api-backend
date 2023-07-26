import mongoose from "mongoose";

export function createConnection(){
    const promise = mongoose.connect(process.env.DBURL,{maxPoolSize:5}, )
        promise.then(data =>{
            console.log('Connection Created');
            // next();
        }).catch(err=>{
            console.log('Coonection Crashed', err);
            throw err;
        })
}
        // export default mongoose;

// export const connection = (request, response, next) => {
//     const promise = mongoose.connect(process.env.DBURL,{maxPoolSize:5});
//         promise.then(data =>{
//             console.log('Connection Created');
//             next();
//         }).catch(err=>{
//             console.log('Coonection Crashed', err);
//             throw err;
//         });
// }