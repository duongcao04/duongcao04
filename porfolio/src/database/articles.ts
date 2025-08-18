import { Article } from '../types/article'

export const ARTICLES: Article[] = [
    {
        id: '1',
        title: 'Hướng dẫn sử dụng AutoCAD cho người mới bắt đầu',
        slug: 'huong-dan-su-dung-autocad-cho-nguoi-moi-bat-dau',
        shortDescription:
            'Phần mềm AutoCAD đã quá quen thuộc trong ngành CAD CAM, với độ sử dụng phổ biến hàng đầu trên toàn thế giới. Trải qua 60 năm phát triển, giờ đây AutoCAD được sử dụng cho nhiều ứng dụng, bao gồm các kế hoạch kiến trúc, bố cục và bản vẽ sản xuất sản phẩm. Nhờ vào tính ứng dụng linh hoạt  này đã khiến AutoCAD đã và đang trở thành tiêu chuẩn cần có cho một số ngành công nghiệp.',
        keywords: ['autocad', 'tutorial', 'newbie', 'huong-dan'],
        thumbnailUrl:
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1754559976/Cadsquad/posts/huong-dan-su-dung-autocad-cho-nguoi-moi-bat-dau_xaesjd.png',
        bgCoverUrl:
            'https://lagrandeourse.design/wp-content/uploads/2024/04/Techniques-de-prototypage-rapide-en-product-design.jpg',
        content: `
Phần mềm AutoCAD đã quá quen thuộc trong ngành CAD CAM, với độ sử dụng phổ biến hàng đầu trên toàn thế giới. Trải qua 60 năm phát triển, giờ đây AutoCAD được sử dụng cho nhiều ứng dụng, bao gồm các kế hoạch kiến trúc, bố cục và bản vẽ sản xuất sản phẩm. Nhờ vào tính ứng dụng linh hoạt  này đã khiến AutoCAD đã và đang trở thành tiêu chuẩn cần có cho một số ngành công nghiệp.

Đầu tiên chúng ta sẽ tìm hiểu cách di chuyển và sau đó chuyển ngay sang phần phác thảo 2D. Sau đó, chúng ta sẽ tiếp tục khám phá các công cụ vẽ kỹ thuật và mô hình 3D của nó. Cuối cùng nhưng không kém phần quan trọng, hãy tìm hiểu cách làm việc với các tệp lưới, bao gồm xuất các mô hình STL để in 3D.

# 1. Tổng quan về AutoCAD
AutoCAD được phát triển và duy trì bởi hãng Autodesk, gã khổng lồ phần mềm cũng cung cấp các chương trình mô hình CAD và 3D khác như Inventor , Revit , Maya , 3ds Max , Tinkercad và Fusion 360 .

AutoCAD là phần mềm thiết kế chuyên nghiệp, với mức giá niêm yết $1,775 mỗi năm cho người dùng phổ thông. Bên cạnh đó, AutoCAD hỗ trợ sử dụng miễn phí không giới hạn trong tối đa một năm, đối với khối giáo dục như sinh viên và giáo viên. Ngoài ra, Autodesk cung cấp bản dùng thử miễn phí 30 ngày cho người dùng mới sử dụng. Bạn hãy thử làm theo hướng dẫn dưới đây, 6 bước để thành công với AutoCAD dành cho người mới bắt đầu.

# 2. Hướng dân sử dụng AutoCAD cho người mới bắt đầu
## Bước 1: Biết giao diện người dùng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754560271/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-1_a6cjnd.png"/>

Trong bước đầu tiên của hướng dẫn này, chúng ta sẽ làm quen với giao diện người dùng và tìm hiểu cách tương tác cũng như thiết lập không gian làm việc.

Để bắt đầu một dự án mới trong AutoCAD, hãy nhấp vào “New” trên bảng điều khiển bên trái. Đây là màn hình làm việc chính của AutoCAD, nơi diễn ra toàn bộ quá trình thiết kế 2D và 3D. Những điều cơ bản chúng ta cần xem xét bao gồm:

• Quick Access Toolbar – Thanh công cụ Truy cập Nhanh: với tất cả các biểu tượng cơ bản cho các hành động như tạo, mở và lưu dự án. Người dùng có thể dễ dàng điều chỉnh các công cụ truy cập nhanh cần hiển thị theo thói quen sử dụng của mình.
• Ribbon – Dài ruy băng: chứa các công cụ và lệnh khác nhau được sắp xếp trong các tab. Thanh công cụ kiểu ruy băng phổ biến trong phần mềm CAD vì nó chứa một số lượng lớn công cụ trong một giao diện nhỏ gọn.
• Command Bar – Thanh lệnh , nơi người dùng có thể nhập lệnh thủ công bằng cách nhập chúng vào đây. Thanh lệnh cũng liệt kê thứ tự các bước cần thiết để thực hiện bất kỳ lệnh nào và cộng với một số mẹo bổ sung.
• Orientation tools – Các công cụ định hướng, như View Cube và NavBar, sẽ được mô tả chi tiết hơn trong phần tiếp theo.

### 1.1. Định hướng cơ bản
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754560335/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-2_jazkiw.png"/>

View Cube, ở góc trên bên phải, được đặt ở chế độ xem trên cùng theo mặc định. Nếu bạn di chuột qua nó, một biểu tượng ngôi nhà nhỏ sẽ xuất hiện. Nhấp vào nó để vào chế độ xem mô tả hình ảnh các đối tượng 3D trong không gian 2 chiều.

Bây giờ, bạn sẽ thấy một hệ tọa độ 3D Descartes ở giữa không gian vẽ của mình, với ba trục và View Cube đã thay đổi vị trí. Bạn có thể nhấp vào các mặt, cạnh và góc của nó để đi đến chế độ xem mong muốn.

NavBar chứa các công cụ định hướng khác, nhưng thông thường đối với phần mềm CAD, phím tắt chuột được ưu tiên hơn. Để xoay quanh không gian vẽ, chỉ cần giữ nút bánh xe (chuột giữa) và di chuyển chuột xung quanh. Ngoài ra, nhấp vào biểu tượng “bàn tay” (pan) trên NavBar.

Giữ phím Shift và con lăn chuột cùng lúc, thay vì xoay, bạn sẽ quay quanh không gian vẽ xung quanh tâm của hệ tọa độ. Cũng có một nút Orbit trên NavBar (nếu bạn không muốn dùng phím tắt).

Các thông tin chia sẻ phía trên bao gồm những điều cơ bản về định hướng không gian vẽ. Tiếp theo, chúng ta sẽ hoàn tất việc thiết lập không gian làm việc để có thể bắt đầu phác thảo 2D.

### 1.2. Thiết lập không gian làm việc
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561639/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-3_gsenxp.png"/>

Trước tiên, hãy đưa ra tất cả các công cụ tạo mô hình 3D cần thiết để hoàn thành hướng dẫn này.

Nhìn vào Quick Access Toolbar, nhấp vào mũi tên kéo dài xuống dưới để tùy chỉnh thanh công cụ này. Một menu thả xuống sẽ bật lên; nhấp vào “Workspace” để bật tính năng này.

Lúc này Quick Access Toolbar sẽ hiển thị một nút mới. Theo mặc định, đó là “Drafting & Annotation”, nhưng hãy thay đổi nó thành “3D Modeling” bằng cách nhấp vào nó và chọn lựa chọn này từ menu thả xuống. Điều này sẽ cho phép bạn sử dụng tất cả các công cụ 2D và 3D cần thiết cho hướng dẫn tiếp theo.

Cuối cùng, để thay đổi đơn vị, hãy nhấp vào biểu tượng AutoCAD ở góc trên cùng bên trái. Thao tác này sẽ mở menu AutoCAD. Chuyển đến “Drawing Utilities > Units”. Trong hướng dẫn này, chúng ta sẽ sử dụng hệ mét, vì vậy hãy thay đổi “Insertion Scale” thành milimét.

Bây giờ chúng ta đã sẵn sàng để bắt đầu thiết kế.

## Bước 2: Phác thảo 2D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561637/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-4_bfgp05.png"/>

Trước khi đi sâu vào các đối tượng ba chiều, trước tiên chúng ta hãy xem bản phác thảo 2D. AutoCAD được biết đến và sử dụng nhiều nhất nhờ khả năng vẽ của nó, ví dụ như phác thảo sơ đồ tầng và bố cục.
### 2.1. Chụp nhanh
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561635/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-5_odc7t5.png"/>

Grip snapping là một tính năng tuyệt vời để phác thảo với AutoCAD. Để bật Grid Snap, chỉ cần nhấn F9 trên bàn phím của bạn hoặc nhấp vào bật “Snap to Drawing Grid” ở góc dưới cùng bên phải.

Nhấp vào mũi tên mở rộng bên cạnh “nút Snap to Drawing Grid” và chọn “Snap Settings…”. Cửa sổ này cho phép bạn điều chỉnh lưới cũng như độ chính xác của việc bắt lưới. Chuyển đến tab “Object Snap” và kích hoạt nó.

Sau đó, bằng cách nhấn F3, chúng ta có thể kích hoạt chụp nhanh các góc, đường thẳng, điểm và điểm giữa, trong số nhiều tùy chọn. Để chọn các ràng buộc chụp đối tượng, nhấp vào mũi tên mở rộng như được hiển thị. Nhấp vào “Tangent” để kích hoạt nó, như hình trên.

Nếu bạn gặp sự cố khi nhập tọa độ hoặc phác thảo, hãy thử bật hoặc tắt “Snapping” và cố gắng không sử dụng Grid và Object Snap đồng thời. Công cụ này rất hữu ích để vẽ các bản phác thảo nhanh chóng và ngăn ngừa các lỗ hổng trong bản phác thảo của bạn.

### 2.2. Vẽ đường
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561632/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-6_xlbhfe.png"/>

Để tạo bản phác thảo đầu tiên của bạn, hãy chọn chế độ xem trên cùng bằng cách nhấp vào View Cube và tắt Grid Snap bằng F9.

Bây giờ, hãy chọn lệnh dòng trên Ribbon hoặc nhập “line”. Với AutoCAD, bạn có thể chỉ cần nhập các chữ cái đầu tiên của bất kỳ lệnh nào và phần mềm sẽ tự động hoàn thành và hiển thị mọi lệnh có sẵn.

Khi bạn đã nhập lệnh dòng, nó sẽ yêu cầu bạn chỉ định điểm đầu tiên. Bạn có thể nhấp vào một điểm ngẫu nhiên trong không gian vẽ của mình hoặc nhập tọa độ theo cách thủ công.

Nhập 0 cho tọa độ X, thay đổi trường nhập tọa độ Y bằng cách nhấn Tab và nhập cả 0 vào đó. Nhấn Enter để xác nhận.

Bây giờ bạn đã chọn tâm của hệ tọa độ làm điểm bắt đầu của đường thẳng, còn được gọi là CenterPoint, nằm ở tọa độ (0,0).

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561622/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-7_eeridz.png"/>

Bây giờ di chuyển chuột của bạn dọc theo trục Y. Lưu ý rằng đầu vào tọa độ sẽ thay đổi từ tọa độ Descartes sang tọa độ cực.

Nhập 25 cho chiều dài của đường và bằng cách nhấn Tab, nhập giá trị góc là 0. Nhấn Enter: Bạn đã vẽ được một đường.

Hãy thử phác thảo một hình vuông hoàn chỉnh ngay bây giờ. Lưu ý rằng giá trị góc luôn liên quan đến gốc tọa độ, vì vậy bạn sẽ phải nhập các giá trị góc tương ứng. Khi muốn quay lại trung tâm, hãy nhấn Esc để thoát lệnh dòng.
### 2.3. Chọn đối tượng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-8_n3ie93.png"/>


Để chọn các đối tượng đã vẽ, chỉ cần nhấp chuột trái vào chúng. Bỏ chọn bằng cách giữ phím Shift và nhấp lại.

Chọn nhiều đối tượng bằng cách nhấp chuột trái (không giữ) và di chuyển chuột từ trái sang phải. Thao tác này sẽ chọn tất cả các đối tượng nằm trong hình chữ nhật màu xanh lam. Bây giờ, khi bạn kéo từ phải sang trái, bạn sẽ chọn tất cả các đối tượng được chạm vào bởi hình chữ nhật màu lục. Nhấp một lần nữa để xác nhận lựa chọn.

Nhấp và giữ nút chuột trái sẽ kích hoạt thòng lọng, cho phép bạn chọn một hình dạng ngẫu nhiên. Cùng với đó, hãy thực hành một chút bằng cách chọn hình vuông của bạn theo một số cách khác nhau. Khi bạn đã hoàn tất, hãy chọn nó một lần nữa và nhấn phím Delete hoặc gõ “delete” để xóa nó.

### 2.4. Vẽ hình
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-9_t1njrt.png"/>

Ngoài ra, AutoCAD cung cấp những cách dễ dàng hơn để vẽ các hình đơn giản. Nhấp vào biểu tượng “Rectangle” trên ruy-băng hoặc nhập biểu tượng đó vào thanh lệnh. Bây giờ, hãy nhập gốc hình chữ nhật là (0,0), giống như chúng ta đã làm cho dòng này và nhấn Enter.

Sau đó, lệnh Rectangle sẽ hỏi tọa độ góc đối diện. Nhập các giá trị của (10,60) và nhấn Enter. (Lưu ý rằng, đối với lệnh này, tọa độ Descartes được giữ nguyên và tính năng Object Snap phải được tắt để đường thẳng chặn vòng tròn đúng cách.)

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-10_fefdio.png"/>

Tiếp theo, hãy tạo một hình tròn có tâm là (0,50). Xác nhận tọa độ bằng cách nhấn Enter. Sau đó, đặt bán kính thành 8 mm.

Nếu bạn mắc lỗi, chỉ cần nhấp đúp vào bản phác thảo mà bạn muốn chỉnh sửa. Chỉnh sửa các giá trị trong cửa sổ bật lên.

Tiếp theo, tạo một hình elip có tâm là (0,30). Đặt bán kính chính (song song với trục X) thành 70 mm và bán kính phụ thành 30 mm, giống như hình bên dưới.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561620/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-11_ydctvl.png"/>

Bây giờ, vẽ một vòng tròn thứ hai có tâm là (25,50) và bật Object Snap bằng cách nhấn F3. Không nhập bất kỳ giá trị nào, hướng bán kính của hình tròn đến trục Y cho đến khi nó giao với hình elip và nhấp chuột trái khi bạn nhìn thấy dấu thập màu lục.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-12_wdgfea.png"/>

Hãy tạo thêm một vài dòng nữa. Vẽ một đường thẳng bắt đầu từ (10,55) và kết thúc nó tiếp xúc với đường tròn thứ hai. Nhấp để xác nhận điểm cuối cùng của đường thẳng khi biểu tượng tiếp tuyến nhỏ màu xanh lá cây xuất hiện.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-13_xrt3w2.png"/>

Bắt đầu một dòng thứ hai ở góc trên cùng bên phải của hình chữ nhật (10,60). Sau đó, nhập một góc 135° và cắt đường tròn đầu tiên bằng đường thẳng. Bạn sẽ tạo được một hình giống như hình trên.

### 2.5. Tạo nếp gấp
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-14_gunrow.png"/>

Tiếp theo, hãy vẽ một nếp gấp. Với công cụ Spline, bạn có thể tạo các đường cong liên tục giữa các điểm kết nối. Tạo một spline bắt đầu từ điểm trung tâm (0,0). Đầu tiên, bạn thêm một khoảng cách, tiếp theo là một góc. Sau đó nhấn Enter để đi đến điểm tiếp theo.

Nhập các tọa độ cực sau: (20,30°), (5,300°), (5,55°), (10,30°) và (5,320°). Đối với điểm cuối cùng, hãy để trống cả hai giá trị và chặn hình elip theo cách thủ công như được hiển thị ở trên. Bây giờ hãy nhập ‘T’ và nhấn Enter để kết thúc tiếp tuyến. Nhấn Enter một lần nữa.

### 2.6. Cắt
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-15_xuy0oy.png"/>

Lệnh Trim được sử dụng để loại bỏ các dòng thừa cho đến nút giao. Bắt đầu bằng cách gõ “trim” và nhấp vào một đoạn đường để xóa nó. Bạn nên kết thúc với hình ảnh trên. Nếu bạn vô tình xóa một dòng, hãy nhấp vào “Undo” trên Quick Access Toolbar – Thanh công cụ truy cập nhanh.

Đảm bảo xem kỹ bất kỳ đường nào bị mắc kẹt giữa các cạnh nhỏ. Những thứ đó có thể sẽ trở thành một vấn đề nếu chúng ta định mô hình 3D cho nó. Nhấn Enter để xác nhận việc cắt sau khi bạn hoàn thành.

### 2.7. Tạo hình ảnh phản chiếu
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561621/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-16_wma9bt.png"/>

Đối với bước cuối cùng này, chúng ta sẽ sử dụng một công cụ phác thảo quan trọng: Mirror. Khi vẽ các bản phác thảo đối xứng, sẽ rất hữu ích nếu bạn chỉ cần vẽ một nửa bản phác thảo và sau đó phản chiếu nó.

Nhập “mirror” và sau đó chọn toàn bộ bản phác thảo và xác nhận bằng “enter”. Chọn CenterPoint (0,0) làm điểm đầu tiên của đường gương và cho điểm thứ hai là tọa độ dương dọc theo trục Y.

Nhấp vào “No” trên câu hỏi để xóa đối tượng nguồn. Bây giờ bạn đã phác thảo thành công bản nháp 2D trong AutoCAD.

## Bước 3: Thiết lập mô hình 3D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561636/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-17_i067bm.png"/>

Mô hình 3D có thể là một trong những phần thú vị nhất của hướng dẫn này. Sử dụng 3D sẽ cho phép bạn thiết kế các mô hình của riêng mình để in 3D.

### 3.1: Tạo các hình cơ bản
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561625/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-18_xewrqd.png"/>


Hãy bắt đầu với một số công cụ mô hình hóa trực tiếp. Chúng ta sẽ sử dụng các hình dạng được xác định trước như hình cầu và hình khối để tạo các đối tượng thông qua các phép toán Boolean (hợp, trừ và giao nhau).

Đầu tiên, chuyển sang chế độ xem đẳng cự thông qua View Cube bằng cách nhấp vào biểu tượng ngôi nhà nhỏ. Sau đó,  hãy bắt đầu bằng cách tạo một hình cầu. Nhập “sphere” và căn giữa tại (0,0). Khi đã được thiết lập, hãy di chuyển chuột xung quanh nó để đạt được hình thức mong muốn. Ngoài ra, hãy nhập một giá trị cho bán kính, trong trường hợp này là 10 mm.

### 3.2. Thay đổi hình ảnh
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561629/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-19_jxupmy.png"/>


Nếu bạn muốn thay đổi hiệu ứng hình ảnh khi hiển thị các đối tượng 3D, bạn có thể thực hiện bằng cách nhập “visualstyles”. Một cửa sổ mới sẽ mở ra nơi bạn có thể chọn kiểu trực quan mà mình mong muốn.

Hãy thay đổi phong cách hình ảnh từ “2D Wireframe” thành “Shades of Grey”. Sau đó, hãy thử một số thao tác Boolean đã đề cập trước đây. Đầu tiên, hãy tạo một hình trụ chồng lên hình cầu mà chúng ta vừa tạo.

Để làm điều đó, hãy nhập “cylinder” và vẽ đáy của hình trụ giống như bạn vẽ một hình tròn đơn giản. Chọn CenterPoint (0,0) làm gốc và chọn bán kính 10 mm. Tiếp theo, tương tự với khối cầu, di chuyển chuột xuống phía dưới để thấy nó extrude. Đặt chiều cao của nó thành 25 mm và xác nhận bằng cách nhấn Enter. Chúng ta sẽ hoàn thành một kết quả giống như hình bên dưới.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561625/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-20_ylrb5u.png"/>

Hoạt động đầu tiên là hợp nhất, nơi các đối tượng được hợp nhất. Khi đã tạo được 2 phần riêng biệt của hình cầu và hình trụ (trong ví dụ trên).  Để nối chúng, gõ “union” và chọn cả hai hình dạng. Xác nhận hoạt động bằng cách nhấn Enter và bây giờ bạn sẽ có một thể hợp nhất các hình đã chọn.

Ngoài ra, bạn sẽ quan tâm thêm cách tách rời và xóa các phần của khối đã tạo. Hãy nhấp vào “Undo” trên Thanh công cụ truy cập nhanh.

Sau đó, gõ “subtract” và nhập lệnh. Đầu tiên, chúng ta cần chọn đối tượng để tách rời Chọn hình trụ và xác nhận bằng cách nhấn Enter. Sau đó, chọn quả cầu làm đối tượng xóa và xác nhận.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561622/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-21_gshoip.png"/>

Thao tác Boolean cuối cùng là cắt các đối tượng. Điều này sẽ chỉ giữ lại các khu vực có hai hoặc nhiều đối tượng chồng lên nhau.

Nhập “intersect” và chọn hình cầu và hình trụ. Bằng cách xác nhận hoạt động, bạn sẽ thấy kết quả dưới dạng bán cầu. Điều này là do hình trụ chỉ chồng lên nửa dưới của hình cầu.

Với các hình dạng cơ bản và ba thao tác đơn giản này, chúng ta có thể thiết kế rất nhiều bộ phận rồi. Tiếp theo, chúng ta sẽ xem mô hình khối hoạt động như thế nào trong AutoCAD.
### 3.3. Mô hình khối
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561627/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-22_qxwrvv.png"/>


Thay vì thiết kế các hình dạng cơ bản để xây dựng một đối tượng, các mô hình phức tạp hơn đòi hỏi một cách tiếp cận hoàn toàn khác. Ở bước này, hãy tạo một bản vẽ mới hoặc xóa bất kỳ thứ gì hiện có trong không gian vẽ của bạn.

Các công cụ chúng ta sẽ thấy tiếp theo là phổ biến trong thế giới CAD 3D. Hãy bắt đầu bằng cách tạo một đa giác 3D đơn giản với một trong những tính năng hữu ích nhất: Extrude.

### 3.4. Extrude
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561627/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-23_edmqgg.png"/>

Bắt đầu bằng cách tạo một bản phác thảo 2D của một hình bát giác. Nhập “polygon” và nhấn Enter. Đầu tiên, đặt số cạnh là 8, sau đó chọn CenterPoint (0,0) làm tâm và nhấp vào “Circumulated about circle”.

Nhập bán kính 80 mm và xác nhận. Bây giờ đến phần thú vị. Đầu tiên, gõ “extrude” và nhấn Enter. Chọn hình bát giác 2D mà chúng ta vừa vẽ và nhấn Enter một lần nữa để tạo đối tượng 3D.

Nếu bạn di chuyển chuột lên trên, bạn sẽ thấy phần đùn đa giác. Đặt chiều cao thành 25 mm và xác nhận bằng phím Enter. Hoạt động đùn có thể được thực hiện với bất kỳ bản phác thảo nào miễn là đó là hình dạng khép kín.

### 3.5. Xoay vòng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561624/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-24_imkorh.png"/>

Tính năng tiếp theo trong hướng dẫn của chúng tôi được gọi là Revolve, để thiết kế trục hoặc đối tượng với đường đối xứng. Hãy bắt đầu bằng cách phác thảo đối tượng. Bắt đầu một đường tại CenterPoint và đi theo hình chữ ‘E’, như được hiển thị ở trên, tạo các đường cho đến khi hình được đóng lại.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561628/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-25_zzlmng.png"/>

Để tạo khối, hãy nhập “revolve”, chọn các phần cần tạo và xác nhận. Sau đó, đối với trục quay, hãy nhập ‘Y’ và nhấn Enter. (Bạn sẽ thấy hình xoay quanh trục Y.)

Đặt góc thành 360° để xoay hoàn toàn và xác nhận. Từ đó sẽ tạo ra một khối hợp nhất mà bạn cần.

### 3.6. Loft
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561628/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-26_cyoqhy.png"/>

Bây giờ, hãy tìm hiểu một số tính năng khác để tạo khối. Chúng ta sẽ bắt đầu với “Loft”. Vẽ một đường tròn trên CenterPoint với bán kính 100 mm. Sau đó, tạo một hình lục giác ở mặt phẳng cao hơn. Để làm điều đó, hãy nhập “polygon” và chọn 6 cạnh. Trước khi nhập tọa độ cho tâm của nó, hãy nhấp vào thanh lệnh và nhập “0,0,50”.

Điều này sẽ yêu cầu AutoCAD tạo bản phác thảo trên mặt phẳng song song với XY nhưng ở độ cao 50 mm. Kết thúc đa giác bằng cách nhập bán kính 80 mm.

Gõ “Loft” để bắt đầu tính năng này. Chọn cả hình tròn và hình lục giác, rồi nhấn Enter. Chọn “Chỉ các mặt cắt ngang” để hoàn thiện công cụ. Điều này sẽ kết nối cả hai hình dạng và tạo ra một khối vững chắc bên trong. Đó là một cách tuyệt vời để kết hợp các hình dạng không khớp với nhau như hình tròn và hình đa giác.

### 3.7. Sweep
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561635/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-27_f2ijzx.png"/>

Tính năng Sweep rất hữu ích khi thiết kế các cấu trúc cong. Để thực hiện, trước tiên bạn cần phác thảo hình học cơ sở. Vẽ bất kỳ đa giác nào bạn thích trên CenterPoint.

Tiếp theo, chúng ta cần thay đổi hệ tọa độ để vẽ trên một mặt phẳng khác ngoài XY. Để thực hiện việc này, hãy chuyển đến Chế độ xem phía trước (Front view), nhập “ucs” và sau đó “v” để biến chế độ này thành Chế độ xem hàng đầu (Top view).

Bây giờ, vẽ một cung tại gốc tọa độ (0,0) bằng cách gõ “arc”. Đây sẽ là con đường quét. Vẽ một vòng cung rộng, không cắt ngang chính nó, tương tự như hình trên.

Cuối cùng, nhập “sweep”, trước tiên chọn cung đã vẽ và xác nhận. Sau đó chọn cơ sở và một lần nữa nhấn Enter.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561630/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-28_poqza6.png"/>


Mặc dù tính năng này có vẻ đơn giản, nhưng nó cho phép bạn tạo các đối tượng có độ phức tạp cao. Vậy là, các nội dung chia sẻ tren đã cho chúng ta những thông tin hữu ích về công cụ quan trọng nhất cho mô hình 3D, từ việc xử lý các hình dạng cơ bản đến các tính năng CAD truyền thống hơn. Tiếp theo, chúng ta sẽ xem cách thao tác với các đối tượng này.

## Bước 4: Di chuyển & Căn chỉnh Đối tượng
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561631/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-29_nzuujs.png"/>

Chúng ta có thể thiết kế 3D hầu hết mọi phần trong AutoCAD với các tính năng và kỹ thuật đã chia sẻ ở bước trước. Tuy nhiên, các đối tượng cũng có thể bao gồm nhiều phần cần được lắp ráp lại với nhau. Hãy cùng tìm hiểu cách di chuyển và lắp ráp các mô hình 3D khác nhau.

Điều cơ bản đầu tiên. Di chuyển một đối tượng là một hoạt động rất đơn giản có thể được thực hiện theo nhiều cách. Bắt đầu bằng cách tạo một hình trụ có tâm ở (0,0), đường kính 100 mm và chiều cao 500 mm.

### 4.1. Di chuyển 3D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561631/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-30_tprxam.png"/>

Điều đầu tiên cần làm là chọn các bộ phận để di chuyển. Nhập “3D move” và xác nhận lệnh để di chuyển. Trong trường hợp dưới đây, chọn hình trụ và nhấn Enter.

Tiếp theo, chúng ta cần chọn một điểm cơ sở để di chuyển. Với con chuột của bạn, chọn điểm trung tâm của cơ sở của hình trụ. Nhấn Enter để xác nhận.

Khi đã xác nhận những gì chúng mình muốn di chuyển, có nhiều cách khác nhau để di chuyển hình trụ xung quanh: bằng chuột qua mặt phẳng XY hoặc bằng cách nhập khoảng cách và hướng để di chuyển qua các tọa độ cực.

Chúng ta cũng có thể thực hiện các bản dịch tuyến tính thông qua các trục XZY. Lưu ý hình mũi tên ba trục ở tâm của hình trụ. Nhấp vào màu xanh (Z) để di chuyển nó theo chiều dọc bằng chuột hoặc bằng cách nhập khoảng cách.

Thao tác di chuyển cuối cùng này có thể được thực hiện bằng cách chọn đối tượng. Lưu ý rằng trục mũi tên sẽ được hiển thị.

### 4.2. Xoay 3D
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561636/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-31_vggtog.png"/>

Chúng ta cũng có thể thao tác với các đối tượng thông qua phép quay đơn giản. Điều này đặc biệt hữu ích cho các đối tượng được phác thảo trong mặt phẳng XY nhưng yêu cầu định vị lại.

Nhập “3D rotate”, chọn đối tượng và nhấn Enter. Lưu ý ba vòng tròn bao quanh hình trụ. Mỗi cái tương ứng với một trục quay và được tô màu tương ứng.

Ví dụ: nếu chúng ta muốn xoay một đối tượng qua trục Z của nó, chúng ta sẽ sử dụng tay cầm màu xanh lam, là màu của trục Z.

Bây giờ, hãy cho hình trụ của chúng ta quay 90° qua trục X. Nhấp vào vòng tròn màu đỏ. Lưu ý rằng hình trụ sẽ xoay quanh trục này khi bạn di chuyển chuột. Xoay nó đến 90° hoặc nhập giá trị và xác nhận.

### 4.3. Căn chỉnh
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561631/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-32_lkqc3d.png"/>

Cả hai công cụ 3D Move và 3D Rotate đều cho phép chúng ta thao tác hoàn toàn với các đối tượng trong không gian. Tuy nhiên, đôi khi chúng ta cần thứ gì đó nhanh hơn và thậm chí có thể trực quan hơn để di chuyển và đặt các vật thể.

Đây là lúc tính năng 3D Align – Căn chỉnh 3D phát huy tác dụng. Với điều này, chúng ta có thể nhanh chóng định vị hai hoặc nhiều đối tượng trong mối quan hệ với nhau, vì vậy đừng xóa hình trụ của bạn. Hãy tạo một hình cầu có đường kính 30 mm ở giữa (0,0).

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561632/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-33_zmnsgb.png"/>

Gõ “align” và xác nhận lệnh. Chỉ chọn hình cầu và nhấn Enter. Bây giờ, chọn tâm của hình cầu làm điểm cơ sở và sau đó chọn tâm của một mặt.

Một đường thẳng sẽ được vẽ, biểu thị chuyển động của quả cầu. Xác nhận bằng Enter và bạn sẽ thấy cả hai hình thẳng hàng.  Điều này có thể khá hữu ích khi sử dụng các hình cơ bản và phép toán Boolean, như bạn mong muốn.

## Bước 5: Làm việc với Bản vẽ kỹ thuật (Technical Drawings)
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561634/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-34_t0xobt.png"/>

AutoCAD là một công cụ tuyệt vời để tạo các bản vẽ kỹ thuật của các mô hình được tạo ở dạng 3D. Trước tiên, chúng ta sẽ cần một mô hình và trang mẫu cho bản vẽ của mình. Ví dụ dưới đây đang sử dụng kết quả mà chúng ta đã tạo ở bước 3 bằng cách sử dụng tính năng Revolve, với sự khác biệt duy nhất là lỗ 40 mm trên trục trung tâm.

Đối với mẫu, hiện tại chúng ta sẽ sử dụng một mẫu từ AutoCAD nhưng bạn có thể tìm thấy nhiều mẫu khác trực tuyến hoặc thậm chí tự thiết kế một mẫu cho chính mình.

Đảm bảo rằng chỉ có phần mà chúng ta muốn chi tiết nằm trong không gian vẽ. Sau đó nhấp chuột phải vào dấu “+” ở góc dưới cùng bên trái và nhấp vào “From Template…”. Chọn mẫu “Tutorial-mMfg” đi kèm với AutoCAD.

Thao tác này sẽ mở một cửa sổ mới với trang mẫu mà chúng ta đã chọn. Bạn có thể đặt tên của mình và tên của dự án trong khối tiêu đề ở dưới cùng bên phải của trang tính bằng cách nhấp đúp vào nó.

### 5.1: Chèn chế độ xem mô hình
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561628/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-35_v1qfrx.png"/>

Chuyển đến tab “Layout” trên Dải băng, sau đó nhấp vào “Base > From Model Space”. Bấm để đặt chế độ xem đầu tiên, theo mặc định là Front, ở giữa trang tính. Bạn sẽ nhận thấy một cửa sổ tùy chọn nhỏ sẽ bật lên.

Tại đây, bạn có thể chuyển chế độ xem sang chế độ xem khác bằng cách nhấp vào “Orientation”. Nếu mô hình quá lớn hoặc quá nhỏ, hãy nhấp vào “Scale” và thay đổi hệ số tỷ lệ. Đối với mô hình của chúng tôi, hãy đặt tỷ lệ thành 1:2.

Nhấp vào “Exit” từ cửa sổ tùy chọn để xác nhận chế độ xem đó. Bây giờ bạn có thể tiếp tục đặt các khung nhìn khác bằng cách kéo chuột theo chiều ngang hoặc chiều dọc.

Tạo một Top view dưới view thứ nhất như hình. Sau đó, di chuyển chế độ xem từ góc 45° để tạo chế độ xem đẳng cự ở góc dưới bên phải. Nhập ‘X’ và nhấn Enter để hoàn tất.

### 5.2. Thêm kích thước
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561623/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-36_xnrvxg.png"/>

Kích thước là phần thông tin quan trọng nhất trong bản vẽ kỹ thuật. Đôi khi số lượng thứ nguyên có thể khá áp đảo, vì vậy hãy cố gắng tuân theo ba quy tắc cơ bản sau:

• Bắt đầu từ chi tiết nhỏ nhất
• Chú thích một chi tiết chỉ một lần
• Chú thích từng chi tiết
Hãy thêm một số kích thước vào bản vẽ này. Đầu tiên, chuyển sang tab “Annotate” trên Ribbon và chọn lệnh “Dimension”. Đây là một lệnh thông minh thích ứng với tính năng bạn muốn chú thích.

Bây giờ hãy nhấp vào một dòng hoặc hai điểm để chú thích khoảng cách của nó. Sau đó, bạn sẽ thấy chiều dài hoặc bán kính và bạn có thể đặt các kích thước tương ứng.

<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561626/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-37_m3aiut.png"/>


Định vị từng chú thích sao cho không chặn các dòng hoặc số khác và đảm bảo rằng chú thích không quá gần với chế độ xem. Đối với mô hình của chúng ta, nó sẽ trông giống như những hình ảnh trên.

Nếu bạn muốn thêm kích thước cho hình tròn hoặc lỗ, trước tiên hãy di chuột qua tính năng đó. Bạn có thể chuyển đổi giữa bán kính và đường kính bằng cách gõ ‘R’ hoặc ‘D’ trên bàn phím.

### 5.3. Chế độ xem mặt cắt
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561632/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-38_mgdqp9.png"/>

Hình chiếu mặt cắt rất phổ biến trong các bản vẽ kỹ thuật vì chúng có thể hiển thị các chi tiết và hình học bên trong mà nếu không thì sẽ bị bỏ sót.

Để tạo chế độ xem mặt cắt, hãy chuyển đến “Layout > Create View > Section View”. Chọn chế độ xem bạn muốn tạo một phần từ đó, sau đó nhấp vào hai điểm cho dòng phần.

Xác nhận bằng cách nhấn Enter và đặt chế độ xem phần giống như chúng tôi đã làm trước đây.

## Bước 6: Làm việc với lưới
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561622/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-39_cbrqqy.png"/>

Làm việc với mắt lưới rất quan trọng đối với những người quan tâm đến in 3D. Nếu bạn muốn in 3D hoặc chia sẻ sáng tạo của mình với người khác, bạn sẽ cần tạo hoặc thậm chí chỉnh sửa tệp lưới.

Các định dạng như STL và OBJ là định dạng của mô hình học 3D. Tuy nhiên, có rất nhiều phần mềm không hỗ trợ 2 loại định dạng này.  AutoCAD có thể xuất sang STL và OBJ tốt, nhưng để nhập các định dạng này, hãy làm theo hướng dẫn dưới đây.

### 6.1. Nhập STL và các Lưới khác
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561625/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-40_urbo3t.png"/>

Mặc dù không thể hoạt động tự nhiên với các tệp lưới, AutoCAD xử lý các định dạng tiêu chuẩn hóa khác như STEP và các định dạng trao đổi của Autodesk DWG và DXF .

Có rất nhiều tùy chọn để chuyển đổi mắt lưới sang các định dạng tệp như vậy. Có lẽ cách dễ nhất là sử dụng công cụ chuyển đổi trực tuyến do CAD-Forum cung cấp . Chúng ta chỉ cần tải lên STL và ứng dụng sẽ chuyển đổi nó thành DWG hoặc DXF.

Ngoài ra, bạn có thể sử dụng các chương trình CAD khác như Fusion 360 hoặc phần mềm miễn phí như FreeCAD để thực hiện chuyển đổi.

Để mở tệp DXF hoặc DWG ở chế độ 3D, hãy tạo một dự án mới. Sau đó vào “AutoCAD logo > Open > Drawing” và chọn tệp. Khi mô hình được nhập, bạn có thể thay đổi hình ảnh giống như chúng ta đã làm ở bước 3.

### 6.2. Xuất tệp STL
<img src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754561639/Cadsquad/posts/huong-dan-su-dung-auto-cad/autocad-tip-41_xdpp6e.png"/>

Việc xuất các tệp STL rất đơn giản với AutoCAD. Chỉ cần nhấp vào “AutoCAD logo > Export > Other File Formats” và chọn “Lithography (*.stl)” làm loại tệp trong trình duyệt tệp.

AutoCAD là một phần mềm CAD mạnh mẽ với một trong những hộp công cụ và tính năng tốt nhất để hỗ trợ các bản vẽ 2D. Khi nói đến thiết kế 3D, nó vẫn được đánh giá rất cao, đặc biệt là đối với dựng hình 3D .

Tuy nhiên, AutoCAD không phải là một ứng dụng dễ dàng và trực quan. Nếu bạn cảm thấy AutoCAD không phải là công cụ phù hợp với mình, hãy thử kiểm tra các tùy chọn mô hình 3D khác như <a href="https://sketchup.trimble.com/en">SketchUp</a>.
`.trim(),
        tags: ['autocad', 'tutorial', 'newbie', 'huong-dan'],
        countView: 1,
        createdAt: '2025-08-01T10:00:00Z',
        updatedAt: '2025-08-03T15:30:00Z',
    },
]
