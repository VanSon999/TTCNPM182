import React, { Component } from 'react';
import "./Content.css";
class Content extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="text1">Mô tả nội dung</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text2" style={{textAlign:"justify"}}>Đầu truyện về cuộc đối đầu hung hiểm bậc nhất lịch sử Marvel trong 5 năm trở lại đây giữa các thế lực đa vũ trụ với nhiều tầng lớp kế hoạch hung hiểm nhằm xóa sổ Trái Đất lẫn vũ trụ với sự tham gia của: Thanos và Hội đồng Hắc Ám(Black Order), chủng tộc Kiến Thiết(Builders), Hội Khai Sáng(llluminati), Biệt đội Báo Thù( Avengers) và những thế lực khác</td>
                        </tr>
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default Content;
