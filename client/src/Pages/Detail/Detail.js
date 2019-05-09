import React, { Component } from 'react';
import "./Detail.css";
import ComicDetail from './ComicDetail';
class Detail extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="text1">Infinity</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <td><img id="comicPic" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6250/6250129_sa.jpg" /></td>
                            <td>
                                <ComicDetail rating="4/5(10 lượt đánh giá)" 
                                             author="Marvel Comics" artist="Marvel Comics" 
                                             genre="Comic hành động-Action, Quân sự- Military, Ly kỳ- Thriller, Siêu nhiên- Super Natural, Huyền ảo- Magical" p
                                             ublisher="Chưa rõ" 
                                             status="Chưa rõ"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}

export default Detail;
