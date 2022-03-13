import React, { Component } from 'react';

class Sidebar extends Component{
    render(){
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