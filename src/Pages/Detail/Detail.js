import React, { Component } from 'react';
import "./Detail.css";
class Detail extends Component {
    render() {
        return (
            <div class="container he">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th className="l text1">Infinity</th>
                            <th className="right"></th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6250/6250129_sa.jpg;maxHeight=640;maxWidth=550"></img></td>
                            <td>
                                <div>
                                    <a href="#">
                                        <span class="glyphicon glyphicon-star"></span>
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="#">
                                        <span class="glyphicon glyphicon-star"></span>
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="#">
                                        <span class="glyphicon glyphicon-star"></span>
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="#">
                                        <span class="glyphicon glyphicon-star"></span>
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <i class="glyphicon glyphicon-star"></i>
                                </div>
                                <br></br>
                                <div>
                                    Đánh giá: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4/5(10 lượt đánh giá)
                                </div>
                                <br></br>
                                <div>
                                    Tác giả: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Marvel Comics
                                </div>
                                <br></br>
                                <div>
                                    Họa sĩ: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Marvel Comics
                                </div>
                                <br></br>
                                <div>
                                    Thể loại: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Comic hành động-Action, Quân sự- Military, Ly kỳ- Thriller, Siêu nhiên- Super Natural, Huyền ảo- Magical 
                                </div>
                                <br></br>
                                <div>
                                    Xuất bản: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chưa rõ
                                </div>
                                <br></br>
                                <div>
                                    Trạng thái: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chưa rõ
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}

export default Detail;
