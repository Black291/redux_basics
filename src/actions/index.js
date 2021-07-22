

export function movieslist(){
    return {
        type:'MOVIES_LIST',
        payload:[
            {id:"1",name:"Pulp Fiction"},
            {id:"2",name:"Pulp Fiction"},
            {id:"3",name:"Pulp Fiction"}    
        ]
    
    }


}


export function directorslist(){
    return {
        type:'DIR_LIST',
        payload:[
            {id:"1",name:"tarantino"},
            {id:"2",name:"steven"},
            {id:"3",name:"mark"}    
        ]
    
    }


}