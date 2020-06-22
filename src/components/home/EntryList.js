import React, { useState } from 'react';
import { Container, Card, CardBody, Button, Collapse } from 'reactstrap';

const EntryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <div id="accordion">
        <Card>
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <Button color="link" onClick={toggle}>
                Collapsible Group Item #1
              </Button>
            </h5>
          </div>

          <Collapse isOpen={isOpen}>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <Button color="link" onClick={toggle}>
                Collapsible Group Item #1
              </Button>
            </h5>
          </div>

          <Collapse isOpen={isOpen}>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <Button color="link" onClick={toggle}>
                Collapsible Group Item #1
              </Button>
            </h5>
          </div>

          <Collapse isOpen={isOpen}>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
      </div>
    </Container>
  );
};

export default EntryList;
