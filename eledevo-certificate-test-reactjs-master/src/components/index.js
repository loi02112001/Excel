import React from "react";
import * as XLSX from 'xlsx'
class Items extends React.Component {
    state = {
        file: [],
        nameAdd: '',
        age: '',
        nameUpdate: '',
        ageUpdate: '',
        checkList: [],
        listCheked: [],
        checked: []
    }
    
    // cach 2
    // handleCheck = id => {
    //     if (this.state.checked.includes(id)) {
    //         this.state.checked = this.state.checked.filter(item => item !== id)
    //     }
    //     else {
    //         this.state.checked.push(id)
    //     }
    //     console.log(this.state.checked,'12333333333333'); 
    //  }

    //cach 1
    // uniqInsert(idInsert, originalArr) {
    //     console.log(originalArr,'day la originalArr');
    //     if(originalArr.includes(idInsert)) {
    //         return originalArr
    //     } else {
    //         return [...originalArr, idInsert]
    //     }
    // }

    render() {
        let listData = []
        
        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{key + 1}</th>
                        <th>{item.name}</th>
                        <th>{item.age}</th>
                        <th><button onClick={() => { this.props.deleteItem({ id: item._id }) }}>Delete</button></th>
                        <th><button onClick={() => { this.setState({ id: item._id, nameUpdate: item.name, ageUpdate: item.age }) }}>Choose</button></th>
                        {/* cach 1  <th>
                            <input type='checkbox' className=""
                                value={item._id}
                                onChange={
                                    (e) => {
                                        e.persist()
                                        this.setState({
                                            idCheck: e.target.checked 
                                            ? this.uniqInsert(item._id, this.state.idCheck || [])
                                            : this.state.idCheck.filter(i => i !== item._id)
                                        })
                                    }
                                }
                            />
                        </th> */}

                         {/* cach 3 */}
                        {/* <th><input type='checkbox'  onChange={() => {
                            if(this.state.listCheked.includes(item._id)){
                                let vitri = this.state.listCheked.indexOf(item._id)
                              
                                this.state.listCheked.splice(vitri,1)
                            }else{
                                this.state.listCheked.push(item._id)
                            }
                            console.log(this.state.listCheked,'dayyyyyyyyy');
                      
                            }}></input></th> */}

                        {/* cach2 <th><input type='checkbox' value={item._id} onChange={() => { this.handleCheck(item._id) }} /></th> */}
                    </tr>)
            })
        }
        return (
            <div>
                <input multiple type='file' onChange={(e) => { this.setState({ file: e.target.files }) }}>
                </input>
                <button onClick={() => { this.props.addExcel({ file: this.state.file }) }}>import</button>
                <input onChange={(e) => { this.setState({ nameAdd: e.target.value }) }}></input>
                <input onChange={(e) => {
                    this.setState({
                        age: e.target.value
                    })
                }}></input>
                <button onClick={() => {
                    this.props.addItem({
                        nameAdd: this.state.nameAdd, age: this.state.age,
                    })
                }}>Add</button>
                <input value={this.state.nameUpdate} onChange={(e) => { this.setState({ nameUpdate: e.target.value }) }}></input>
                <input value={this.state.ageUpdate} onChange={(e) => { this.setState({ ageUpdate: e.target.value }) }}></input>
                <button onClick={() => { this.props.updateItem({ id: this.state.id, nameUpdate: this.state.nameUpdate, ageUpdate: this.state.ageUpdate }) }}>Update</button>
                <button onClick={() => {
                    //cach1 const setUpDataToExport = this.props.items.filter(item => this.state.idCheck.includes(item._id))
                    //cach2 const setUpDataToExport = this.props.items.filter(item => this.state.checked.includes(item._id))
                    //cach3 const setUpDataToExport = this.props.items.filter(item => this.state.listCheked.includes(item._id))

                    let ws = XLSX.utils.json_to_sheet(setUpDataToExport)
                    let wb = { Sheets: { data: ws }, SheetNames: ['data'] }
                    XLSX.writeFileXLSX(wb, 'excel-test.xlsx')
                }}>Export</button>
                <table>
                    <tbody>
                        <tr>
                            <th>Id cua du lieu</th>
                            <th>Ten cua du lieu</th>
                        </tr>

                        {listData}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default Items