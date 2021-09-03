import "./App.css";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            diam a ex consectetur malesuada ac a odio. Maecenas convallis ligula
            lectus, nec elementum sem varius eu. Curabitur ut cursus dui.
            Quisque nec ex mauris. Nunc iaculis eu nulla a elementum. Nam quam
            nibh, convallis sit amet nibh at, porta fermentum dui. Maecenas
            fringilla massa felis, sit amet malesuada ligula ultrices nec. Fusce
            suscipit velit sit amet felis hendrerit fermentum dignissim at est.
            Vestibulum eu sapien pharetra orci luctus mollis suscipit aliquam
            diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
            interdum metus nisl, et rutrum ipsum blandit ullamcorper. Nullam et
            orci ante. Phasellus eu efficitur libero. Aliquam erat volutpat.
            Donec bibendum pulvinar mauris, ut fringilla turpis consequat id.
            Mauris nulla nunc, scelerisque at leo sit amet, volutpat sagittis
            metus. Sed justo nunc, fermentum ac erat et, suscipit placerat enim.
            Vivamus hendrerit gravida imperdiet. Suspendisse sagittis tortor
            libero, sed pulvinar nulla pellentesque eget. Praesent at lacinia
            massa, in fringilla lectus. Mauris luctus quis mauris vel interdum.
            Aliquam rhoncus aliquam commodo. Etiam congue nulla lectus, id
            volutpat mauris faucibus sed. In nec venenatis felis, ut luctus
            orci. Aliquam fermentum, sem nec fringilla consequat, odio metus
            viverra tellus, ut placerat lectus eros ac lacus. Phasellus eget
            erat vitae sem suscipit cursus. Curabitur facilisis ante et neque
            laoreet, in pellentesque lorem dignissim. Maecenas in odio sit amet
            nisl posuere suscipit a id tortor. In hac habitasse platea dictumst.
            Pellentesque elementum nec nisl sodales lacinia. Etiam facilisis
            turpis mi, vitae bibendum ante venenatis vel. Vivamus nibh nisl,
            laoreet ultricies auctor et, rutrum in neque. Praesent lacus turpis,
            egestas id semper ut, semper id libero. Ut blandit laoreet odio ac
            dapibus. Fusce vestibulum tortor eros, et fringilla magna posuere
            at. Morbi laoreet augue quis turpis sollicitudin finibus. Morbi
            egestas erat velit, a pellentesque sapien blandit sit amet. Mauris
            elementum laoreet tortor, vulputate venenatis sapien venenatis nec.
            Etiam sed dolor felis. Etiam quis magna enim. Phasellus pulvinar,
            odio a maximus elementum, orci nisl faucibus ante, vel convallis
            enim quam nec justo. Curabitur tincidunt ligula sapien, vel
            condimentum massa euismod et. Nullam pretium sit amet nisi eu
            semper. Proin dapibus erat quis lectus pharetra, et semper nisi
            luctus. Integer arcu orci, dignissim et pulvinar ac, bibendum vel
            elit. Donec pulvinar nunc ac massa ornare pretium. Vivamus et
            vehicula nibh, eu finibus nisl. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Integer
            fringilla, nulla vel blandit tristique, nisi turpis viverra eros, at
            lobortis eros lacus eget nulla. Donec congue ornare ornare. Nullam
            in vehicula elit, eget pulvinar libero. Nunc et placerat arcu, quis
            dapibus mauris. Ut facilisis nulla non fringilla luctus. Aenean eu
            velit nisi. Vivamus ac suscipit metus, vulputate ullamcorper nulla.
            Nullam in leo ultricies, fermentum enim quis, bibendum enim. Donec
            mattis placerat tellus vitae efficitur. Nulla faucibus ante lorem,
            vitae sagittis nibh lacinia mattis. In pulvinar imperdiet finibus.
            Duis et viverra diam. Quisque vitae urna sit amet tellus condimentum
            dignissim. Ut lacinia faucibus pharetra. Vivamus facilisis id neque
            sed vestibulum. Nunc condimentum elit in auctor imperdiet. Fusce
            faucibus sapien mi, in hendrerit erat pulvinar in. Proin laoreet ex
            sed augue hendrerit, non interdum arcu convallis. Pellentesque
            libero justo, fermentum at blandit a, tempor quis leo. Nulla cursus
            metus ac hendrerit luctus. Suspendisse potenti. Curabitur quis lacus
            id dui congue congue. Mauris ut elementum dolor. Proin condimentum
            libero non nulla tristique elementum. Praesent ut risus nec arcu
            eleifend mattis eu quis massa. Nunc placerat dignissim magna, ac
            sodales lacus pharetra non. Curabitur felis velit, ornare vel turpis
            fermentum, egestas facilisis orci. Nunc ultrices lacus eget velit
            ornare bibendum. Donec ac metus eget velit ullamcorper cursus. Morbi
            sollicitudin quis turpis eget efficitur. Vivamus eget gravida purus,
            et malesuada dui. Praesent viverra felis odio, ac tincidunt turpis
            placerat et. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aliquam gravida vulputate elementum.
            Aenean ut commodo magna. Integer id vestibulum dolor. Nunc ac velit
            at orci lacinia imperdiet. Curabitur eu sem vestibulum ipsum iaculis
            cursus. Curabitur posuere suscipit maximus. Nulla facilisi. Mauris
            hendrerit est eu urna congue, sit amet posuere nulla consectetur.
            Pellentesque ac augue dui. Praesent venenatis vitae ipsum vel
            consequat. Integer nec metus leo. Nulla semper lacinia eleifend.
          </Col>
          <Col xs={12}>
            <Player />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
