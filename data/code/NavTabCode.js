export const MenuNavCode = `
<Nav as="ul>
    <Nav.Item as="li"><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();

export const MenuNav2Code = `
<Nav>
    <Nav.Link href="" active>Active</Nav.Link>
    <Nav.Link href="">Link</Nav.Link>
    <Nav.Link href="">Link</Nav.Link>
    <Nav.Link href="" disabled>Disabled</Nav.Link>
</Nav>
`.trim();

export const HorizontalMenuCode = `
<Nav className="justify-content-center" as="ul>
    <Nav.Item as="li"><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>

`.trim();
export const HorizontalMenuCode2 = `
<Nav className="justify-content-end" as="ul">
    <Nav.Item as="li"><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();

export const VerticalNavCode = `
<Nav className="flex-column" as="ul">
    <Nav.Item as="li"><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();

export const VerticalNavCode2 = `
<Nav className="flex-column">
    <Nav.Link href="" active>Active</Nav.Link>
    <Nav.Link href="">Link</Nav.Link>
    <Nav.Link href="">Link</Nav.Link>
    <Nav.Link href="" disabled>Disabled</Nav.Link>
</Nav>
`.trim();

export const TabsMenuCode = `
<Nav variant="tabs" as="ul">
    <Nav.Item as="li"><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();

export const PillsMenuCode = `
<Nav as="ul" variant="pills">
<Nav.Item as="li"><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
<Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
<Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
<Nav.Item as="li"><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();

export const NavFillCode = `
<Nav as="ul" variant="pills" fill>
    <Nav.Item as="li"><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Much longer nav link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item as="li"><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();

export const NavFillCode2 = `
<Nav variant="pills" fill>
    <Nav.Item><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="">Much longer nav link</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();
export const NavFillCode3 = `
<Nav variant="pills" justify>
    <Nav.Item><Nav.Link href="" active>Active</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="">Much longer nav link</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="">Link</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="" disabled>Disabled</Nav.Link></Nav.Item>
</Nav>
`.trim();

export const FlexNavMenuCode = `
<Nav variant="pills" className="flex-column flex-sm-row">
    <Nav.Link as="a" href="" className="flex-sm-fill text-sm-center" active>Active</Nav.Link>
    <Nav.Link as="a" href="" className="flex-sm-fill text-sm-center">Longer nav link</Nav.Link>
    <Nav.Link as="a" href="" className="flex-sm-fill text-sm-center">Link</Nav.Link>
    <Nav.Link as="a" href="" className="flex-sm-fill text-sm-center" disabled>Disabled</Nav.Link>
</Nav>
`.trim();

export const FlexNavMenuCode2 = `
<Tab.Container>
    <Nav
    variant="tabs"
    id="myTab"
    className="mb-3"
    defaultActiveKey={isActive}
    onSelect={handleSelect}
    >
    <Nav.Link
        as="a"
        eventKey="#home"
        active={isActive === "#home"}
        id="home-tab"
    >
        Home
    </Nav.Link>
    <Nav.Link as="a" eventKey="#profile" id="profile-tab">
        Profile
    </Nav.Link>
    <Nav.Link as="a" eventKey="#contact" id="contact-tab">
        Contact
    </Nav.Link>
    </Nav>
    <Tab.Content id="myTabContent" onSelect={handleSelect}>
    <Tab.Pane
        id="home"
        eventKey="#home"
        active={isActive === "#home"}
    >
        <p>
        Consequat occaecat ullamco amet non eiusmod nostrud
        dolore irure incididunt est duis anim sunt officia.
        Fugiat velit proident aliquip nisi incididunt nostrud
        exercitation proident est nisi. Irure magna elit commodo
        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
        veniam ad. Eiusmod consequat eu adipisicing minim anim
        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
        exercitation irure Lorem incididunt nostrud.
        </p>
    </Tab.Pane>
    <Tab.Pane id="profile" eventKey="#profile">
        <p>
        Consequat occaecat ullamco amet non eiusmod nostrud
        dolore irure incididunt est duis anim sunt officia.
        Fugiat velit proident aliquip nisi incididunt nostrud
        exercitation proident est nisi. Irure magna elit commodo
        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
        veniam ad. Eiusmod consequat eu adipisicing minim anim
        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
        exercitation irure Lorem incididunt nostrud.
        </p>
    </Tab.Pane>
    <Tab.Pane id="contact" eventKey={"#contact"}>
        <p>
        Consequat occaecat ullamco amet non eiusmod nostrud
        dolore irure incididunt est duis anim sunt officia.
        Fugiat velit proident aliquip nisi incididunt nostrud
        exercitation proident est nisi. Irure magna elit commodo
        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
        veniam ad. Eiusmod consequat eu adipisicing minim anim
        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
        exercitation irure Lorem incididunt nostrud.
        </p>
    </Tab.Pane>
    </Tab.Content>
</Tab.Container>
`.trim();

export const HorizontalPillsCode = `
<Tab.Container defaultActiveKey="pills-home-tab">
    <Nav variant="pills" className="mb-3">
        <Nav.Item>
        <Nav.Link eventKey="pills-home-tab">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="pills-profile-tab">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="pills-contact-tab">Contact</Nav.Link>
        </Nav.Item>
    </Nav>

    <Tab.Content>
        <Tab.Pane eventKey="pills-home-tab">
        <p>
            Consequat occaecat ullamco amet non eiusmod nostrud dolore
            irure incididunt est duis anim sunt officia. Fugiat velit
            proident aliquip nisi incididunt nostrud exercitation
            proident est nisi. Irure magna elit commodo anim ex veniam
            culpa eiusmod id nostrud sit cupidatat in veniam ad.
            Eiusmod consequat eu adipisicing minim anim aliquip
            cupidatat culpa excepteur quis. Occaecat sit eu
            exercitation irure Lorem incididunt nostrud.
        </p>
        </Tab.Pane>
        <Tab.Pane eventKey="pills-profile-tab">
        <p>
            Consequat occaecat ullamco amet non eiusmod nostrud dolore
            irure incididunt est duis anim sunt officia. Fugiat velit
            proident aliquip nisi incididunt nostrud exercitation
            proident est nisi. Irure magna elit commodo anim ex veniam
            culpa eiusmod id nostrud sit cupidatat in veniam ad.
            Eiusmod consequat eu adipisicing minim anim aliquip
            cupidatat culpa excepteur quis. Occaecat sit eu
            exercitation irure Lorem incididunt nostrud.
        </p>
        </Tab.Pane>
        <Tab.Pane eventKey="pills-contact-tab">
        <p>
            Consequat occaecat ullamco amet non eiusmod nostrud dolore
            irure incididunt est duis anim sunt officia. Fugiat velit
            proident aliquip nisi incididunt nostrud exercitation
            proident est nisi. Irure magna elit commodo anim ex veniam
            culpa eiusmod id nostrud sit cupidatat in veniam ad.
            Eiusmod consequat eu adipisicing minim anim aliquip
            cupidatat culpa excepteur quis. Occaecat sit eu
            exercitation irure Lorem incididunt nostrud.
        </p>
        </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
`.trim();

export const VerticalPillsCode = `
<Tab.Container
id="left-tabs-example"
defaultActiveKey="v-pills-home"
>
<Row>
<Col md={4} xs={12}>
    <Nav variant="pills" className="flex-column">
    <Nav.Item>
        <Nav.Link
        eventKey="v-pills-home"
        id="v-pills-home-tab"
        >
        Home
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link
        eventKey="v-pills-profile"
        id="v-pills-profile-tab"
        >
        Profile
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link
        eventKey="v-pills-messages"
        id="v-pills-messages-tab"
        >
        Messages
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link
        eventKey="v-pills-settings"
        id="v-pills-settings-tab"
        >
        Settings
        </Nav.Link>
    </Nav.Item>
    </Nav>
</Col>
<Col md={8} xs={12}>
    <Tab.Content>
    <Tab.Pane eventKey="v-pills-home">
        <p>
        Cillum ad ut irure tempor velit nostrud occaecat
        ullamco aliqua anim Lorem sint. Veniam sint duis
        incididunt do esse magna mollit excepteur laborum
        qui. Id id reprehenderit sit est eu aliqua occaecat
        quis et velit excepteur laborum mollit dolore
        eiusmod. Ipsum dolor in occaecat commodo et
        voluptate minim reprehenderit mollit pariatur.
        Deserunt non laborum enim et cillum eu deserunt
        excepteur ea incididunt minim occaecat.
        </p>
    </Tab.Pane>
    <Tab.Pane
        eventKey="v-pills-profile"
        id="v-pills-profile"
    >
        <p>
        Eu dolore ea ullamco dolore Lorem id cupidatat
        excepteur reprehenderit consectetur elit id dolor
        proident in cupidatat officia. Voluptate excepteur
        commodo labore nisi cillum duis aliqua do. Aliqua
        amet qui mollit consectetur nulla mollit velit
        aliqua veniam nisi id do Lorem deserunt amet. Culpa
        ullamco sit adipisicing labore officia magna elit
        nisi in aute tempor commodo eiusmod.
        </p>
    </Tab.Pane>
    <Tab.Pane
        eventKey="v-pills-messages"
        id="v-pills-messages"
    >
        <p>
        Fugiat id quis dolor culpa eiusmod anim velit
        excepteur proident dolor aute qui magna. Ad proident
        laboris ullamco esse anim Lorem Lorem veniam quis
        Lorem irure occaecat velit nostrud magna nulla.
        Velit et et proident Lorem do ea tempor officia
        dolor. Reprehenderit Lorem aliquip labore est magna
        commodo est ea veniam consectetur.
        </p>
    </Tab.Pane>
    <Tab.Pane
        eventKey="v-pills-settings"
        id="v-pills-settings"
    >
        <p>
        Fugiat id quis dolor culpa eiusmod anim velit
        excepteur proident dolor aute qui magna. Ad proident
        laboris ullamco esse anim Lorem Lorem veniam quis
        Lorem irure occaecat velit nostrud magna nulla.
        Velit et et proident Lorem do ea tempor officia
        dolor. Reprehenderit Lorem aliquip labore est magna
        commodo est ea veniam consectetur.
        </p>
    </Tab.Pane>
    </Tab.Content>
</Col>
</Row>
</Tab.Container>
`.trim();
