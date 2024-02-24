function Footer() {
    return (  <div className="vh-50 bg-dark text-secondary p-2">
    <h1 className="my-3">Making a Great First Impression</h1>
    <div className="row h-100 w-100">

        <div className="col-md-4  d-flex flex-column ">
          <h4>Useful Link</h4>
          <span className="my-2">Home</span>
          <span className="my-2">Products</span>
          <span className="my-2">Cart</span>
        </div>

        <div className="col-md-4  d-flex flex-column ">
          <h4>Contact us</h4>
          <span className="my-2">Email</span>
          <span className="my-2">Messager</span>
          <span className="my-2">Phonenumber</span>
        </div>
        
        <div className="col-md-4  d-flex flex-column ">
          <h4>Company</h4>
          <span className="my-2">About</span>
          <span className="my-2">Block</span>
        </div>

    </div>
    <h4 className="my-3 text-end">Developered by hitomi</h4>
  </div> );
}

export default Footer;