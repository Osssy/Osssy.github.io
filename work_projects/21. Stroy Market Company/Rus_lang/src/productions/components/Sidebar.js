import React, { Component } from 'react';

class Sidebar extends Component{
    render(){

        // let data = [
        //     {sidebarListLink: "productions", sidebarListIcon: 'flaticon-015-cart', sidebarListText: 'Лесоматериалы'},
        //     {sidebarListLink: "productions", sidebarListIcon: 'flaticon-002-welding', sidebarListText: 'Стройматериалы'},
        //     {sidebarListLink: "productions", sidebarListIcon: 'flaticon-010-tank-1', sidebarListText: 'Санитарно-техническое оборудование'},
        // ];

        // let Datalist = data.map((val, i)=>{
        //     return(
        //         <li key={i}><a href={val.sidebarListLink}><i className={val.sidebarListIcon} />{val.sidebarListText}</a></li>
        //     )
        // })

        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">Скачать прайсы</h3>
                        <ul className="sidebar-list">
                            <li><a href="assets/files/Прайс-Меркон.pdf" download><i className="fa fa-file-pdf-o" />Прайс.PDF</a></li>
                            <li><a href="assets/files/Прайс-Меркон.docx" download><i className="fa fa-file-word-o" />Прайс.DOC</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;