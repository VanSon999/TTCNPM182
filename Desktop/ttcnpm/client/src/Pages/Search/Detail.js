import React, { Component } from 'react';
import "./Detail.css";
import ResultCell from "./ResultCell";

class Detail extends Component {
    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div className="col m2 text1 center-align">Hình</div>
                    <div className="col m10 text1 center-align">Tên truyện và nội dung</div>
                </div>
                <table>
                    {/* <thead>
                        <tr>
                            <th className="text1" style={{maxWidth:"180px"}}>Hình</th>
                            <th className="text1">Tên truyện và Nội dung</th>
                        </tr> 
                    </thead> */}
                    <tbody>
                        <tr>
                            {/* <td><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6250/6250129_sa.jpg;maxHeight=640;maxWidth=550"></img></td>
                            <td>
                                <div className="padd">
                                    <a className="text-link">Aventure 3</a>
                                    <p className="content-text">
                                        
                                    </p>
                                </div>
                            </td> */}
                            <ResultCell comicPic="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6250/6250129_sa.jpg" 
                                        name="Avengers 3" 
                                        context="Đầu truyện về cuộc đối đầu hung hiểm bậc nhất lịch sử Marvel trong 5 năm trở lại đây giữa các thế lực đa vũ trụ với nhiều tầng lớp kế hoạch hung hiểm nhằm xóa sổ Trái Đất lẫn vũ trụ với sự tham gia của: Thanos và Hội đồng Hắc Ám(Black Order), chủng tộc Kiến Thiết(Builders), Hội Khai Sáng(llluminati), Biệt đội Báo Thù( Avengers) và những thế lực khác"
                                        link="#"/>
                        </tr>
                        <tr>
                            {/* <td><img src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg"></img></td>
                            <td>
                                <div className="padd">
                                    <a className="text-link">Aventure 2</a>
                                    <p className="content-text">
                                        Marvel’s The Avengers 2 kể về biệt đội siêu anh hùng của chúng ta sẽ phải chiến đấu với binh đoàn robot được biết đến với cái tên là Ultron.
                                    </p>
                                </div>
                            </td> */}
                            <ResultCell comicPic="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg"
                                        name="Avengers 2"
                                        context="Marvel’s The Avengers 2 kể về biệt đội siêu anh hùng của chúng ta sẽ phải chiến đấu với binh đoàn robot được biết đến với cái tên là Ultron."
                                        link="#"/>
                        </tr>
                        <tr>
                            {/* <td><img src="http://image.pmcontent.com/film/44/poster.medium.jpg"></img></td>
                            <td>
                                <div className="padd">
                                    <a className="text-link">Aventure 1</a>
                                    <p className="content-text">
                                        Marvel’s The Avengers 1 kể về một nhóm siêu anh hùng với những khả năng đặc biệt, họ bao gồm: Người Sắt, Thor, Captain America, và Người Khổng Lồ được gọi chung với cái tên SHIELD. Mục đích của SHIELD là nhằm bảo vệ Trái đất khỏi âm mưu hủy hoại của những thế lực xấu từ ngoài địa cầu mà kẻ cầm đầu là Loki. Marvel’s The Avengers Là một trong những phim được mong đợi nhất hè 2012, phim quy tụ dàn diễn viên đẹp với những cảnh quay sống động đã mang về cho nhà sản xuất hơn 1 tỷ USD. Nếu bạn đã từng là Fan của những siêu phẩm như: Spider-Man, Batman thì Marvel’s The Avengers quả là một bộ phim khó có thể bỏ qua. 
                                    </p>
                                </div>
                            </td> */}
                            <ResultCell comicPic="http://image.pmcontent.com/film/44/poster.medium.jpg"
                                        name="Avengers 1"
                                        context="Marvel’s The Avengers 1 kể về một nhóm siêu anh hùng với những khả năng đặc biệt, họ bao gồm: Người Sắt, Thor, Captain America, và Người Khổng Lồ được gọi chung với cái tên SHIELD. Mục đích của SHIELD là nhằm bảo vệ Trái đất khỏi âm mưu hủy hoại của những thế lực xấu từ ngoài địa cầu mà kẻ cầm đầu là Loki. Marvel’s The Avengers Là một trong những phim được mong đợi nhất hè 2012, phim quy tụ dàn diễn viên đẹp với những cảnh quay sống động đã mang về cho nhà sản xuất hơn 1 tỷ USD. Nếu bạn đã từng là Fan của những siêu phẩm như: Spider-Man, Batman thì Marvel’s The Avengers quả là một bộ phim khó có thể bỏ qua."
                                        link="#"/>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}

export default Detail;
