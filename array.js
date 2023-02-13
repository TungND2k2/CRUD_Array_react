import React from 'react';

 class Array extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                    {
                        id:1,
                        company: 'Alfreds Futterkiste',
                        contact: 'Maria Anders',
                        country: 'Germany'
                    },
                    {
                        id:2,

                        company: 'Centro comercial Moctezuma',
                        contact: 'Francisco Chang',
                        country: 'Mexico'
                    },
                    {
                        id:3,
                        company: 'Ernst Handel',
                        contact: 'Roland Mendel',
                        country: 'Austria'
                    },
                    {
                        id:4,
                        company: 'Island Trading',
                        contact: 'Helen Bennett',
                        country: 'UK'
                    },
                    {
                        id:5,
                        company: 'Laughing Bacchus Winecellars',
                        contact: 'Yoshi Tannamuri',
                        country: 'Canada'
                    },
                    {
                        id:6,
                        company: 'Magazzini Alimentari Riuniti',
                        contact: 'Giovanni Rovelli',
                        country: 'Italy'
                    }
                ],
            isShow: false,
            addShow: false,
            indexArray:0,
            ID:0,
            Company:'',
            Contact:'',
            Country:''

        }


}
render() {
        return(
            <>
                <div>
                    <h1>List of fruits</h1>
                    <button className="btn btn-outline-success" onClick={e=>{
                        this.setState((state) => {
                                return {
                                    addShow: !state.isShow,
                                }
                            }
                        )
                    }}>Add</button>
                    {this.state.addShow && <label>ID</label>}
                    {this.state.addShow && <input type="text" onChange={e=>{
                        this.setState((state) => {
                            state.ID = e.target.value;
                            return state
                        })
                    }}/>}
                    {this.state.addShow &&<label>Company</label>}
                    {this.state.addShow && <input type="text" onChange={e=>{
                        this.setState((state) => {
                            state.Company = e.target.value;
                            return state
                        })
                    }}/>}
                    {this.state.addShow && <label>Contact</label>}
                    {this.state.addShow && <input type="text" onChange={e=>{
                        this.setState((state) => {
                            state.Contact = e.target.value;
                            return state
                        })
                    }}/>}
                    {this.state.addShow && <label>Country</label>}
                    {this.state.addShow && <input type="text" onChange={e=>{
                        this.setState((state) => {
                            state.Country = e.target.value;
                            return state
                        })
                    }}/>}
                    {this.state.addShow && <button className="btn btn-outline-warning" onClick={e=>{

                        this.setState((state) => {
                            let info={
                                id:state.ID,
                                company:state.Company,
                                contact:state.Contact,
                                country:state.Country
                            }
                                state.list.push(info)
                            console.log(state.list)
                                return state
                            }
                        )                    }}> Save Add</button>}
                    {this.state.list.map((student,index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{student.company}</td>
                            <td>{student.contact}</td>
                            <td>{student.country}</td>
                            <td><button className="btn btn-outline-danger " onClick={(e)=>{
                                this.setState((state) => {
                                        state.list.splice(index,1)
                                    console.log(state.list)
                                        return {
                                        }
                                    }
                                )
                            }}>DELETE</button></td>
                            <td><button className="btn btn-outline-info " onClick={(e)=>{

                                this.setState((state) => {
                                        return {
                                            isShow: !state.isShow,
                                            indexArray:index
                                        }
                                    }
                                )
                            }}>Edit</button></td>
                        </tr>
                    ))}
                    {this.state.isShow && <input type="text" value={this.state.list[this.state.indexArray].id}/>}
                    {this.state.isShow && <input type="text"
                    onChange={e=>{
                        this.setState((state) => {
                            state.list[state.indexArray].company = e.target.value;
                            return state
                        })
                    }}/>}
                    {this.state.isShow && <input type="text"    onChange={e=>{
                        this.setState((state) => {
                            state.list[state.indexArray].contact = e.target.value;
                            return state
                        })
                    }}/>}
                    {this.state.isShow && <input type="text"    onChange={e=>{
                        this.setState((state) => {
                            state.list[state.indexArray].country = e.target.value;
                            return state
                        })
                    }}/>}
                    {this.state.isShow &&<button className="btn btn-outline-warning" onClick={e=>{
                        this.setState((state) => {
                                return {
                                    isShow: !state.isShow,
                                }
                            }
                        )
                    }}>Save</button>}
                </div>
            </>
        )
}
}
export default Array