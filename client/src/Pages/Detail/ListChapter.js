import React, { Component } from 'react';
import "./ListChapter.css";
class ListChapter extends Component {
    render() {
        return (
            <div class="container he">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th className="left text1">Danh sách các Chapters của truyện</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text2">
                                <a href="#"> Vô Cực-5</a>
                                <span className="fl">17/04/2019</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text2">
                                <a href="#"> Vô Cực-4</a>
                                <span className="fl">11/04/2019</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text2">
                                <a href="#"> Vô Cực-3</a>
                                <span className="fl">05/04/2019</span>
                            </td>
                        </tr>                        <tr>
                            <td className="text2">
                                <a href="#"> Vô Cực-2</a>
                                <span className="fl">28/03/2019</span>
                            </td>
                        </tr>                        <tr>
                            <td className="text2">
                                <a href="#"> Vô Cực-1</a>
                                <span className="fl">22/03/2019</span>
                            </td>
                        </tr>                        <tr>
                            <td className="text2">
                                <a href="#"> Đến Ánh Quang-2</a>
                                <span className="fl">16/03/2019</span>
                            </td>
                        </tr>                        <tr>
                            <td className="text2">
                                <a href="#"> Đến Ánh Quang-1</a>
                                <span className="fl">10/03/2019</span>
                            </td>
                        </tr>                        <tr>
                            <td className="text2">
                                <a href="#"> Đến Tận Cùng-2</a>
                                <span className="fl">04/03/2019</span>
                            </td>
                        </tr>                        <tr>
                            <td className="text2">
                                <a href="#"> Đến Tận Cùng-1</a>
                                <span className="fl">27/02/2019</span>
                            </td>
                        </tr>
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default ListChapter;
