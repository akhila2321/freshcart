export const CarouselCode = `
<Carousel controls={false} indicators={false}>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide"  />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-2.jpg" alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-3.jpg" alt="Third slide" />
  </Carousel.Item>
</Carousel>
`.trim();

export const CarouselWithControlCode = `
<Carousel indicators={false} id="carouselExampleControls">
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="Third slide" />
  </Carousel.Item>
</Carousel>
`.trim();

export const CarouselWithIndicatorCode = `
<Carousel indicators id="carouselExampleIndicators">
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-2.jpg" alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-3.jpg" alt="Third slide" />
  </Carousel.Item>
</Carousel>
`.trim();

export const CarouselWithCaptionCode = `
<Carousel activeIndex={index} onSelect={handleSelect} id="carouselExampleCaptions">
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide"
    />
    <Carousel.Caption className=" d-none d-md-block">
      <h3>
        First slide label
      </h3>
      <p>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-2.jpg" alt="Second slide"
    />
    <Carousel.Caption className="d-none d-md-block">
      <h3>
        Second slide label
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-3.jpg" alt="Third slide"
    />
    <Carousel.Caption className="d-none d-md-block ">
      <h3>
        Third slide label
      </h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
`.trim();

export const CarouselCrossfadeCode = `
<Carousel fade indicators={false} id="carouselExampleFade">
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-2.jpg" alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-3.jpg" alt="Third slide" />
  </Carousel.Item>
</Carousel>
`.trim();

export const CarouselIndividualCode = `
<Carousel indicators={false} id="carouselExampleInterval">
  <Carousel.Item interval={1000}>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <Image className="d-block w-100" src="/images/blog/blog-img-2.jpg" alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-3.jpg" alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
`.trim();

export const CarouselDisableSwipeCode = `
<Carousel indicators={false} touch={false} id="carouselExampleControlsNoTouching">
  <Carousel.Item interval={1000}>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide" />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <Image className="d-block w-100" src="/images/blog/blog-img-2.jpg" alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-3.jpg" alt="Third slide" />
  </Carousel.Item>
</Carousel>
`.trim();

export const CarouselDarkCode = `
<Carousel variant="dark">
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-1.jpg" alt="First slide" />
    <Carousel.Caption className="d-none d-md-block">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-2.jpg" alt="Second slide" />
    <Carousel.Caption className="d-none d-md-block">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image className="d-block w-100" src="/images/blog/blog-img-3.jpg" alt="Third slide" />
    <Carousel.Caption className="d-none d-md-block">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
`.trim();
