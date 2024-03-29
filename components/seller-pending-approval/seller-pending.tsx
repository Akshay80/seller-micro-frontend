const SellerPending = () => {
    return (
        <section className="mb-10">
            <div style={{ height: '80vh' }} className="d-flex flex-column justify-content-center align-items-center ">
                <div className="text-center">
                    <div className="mb-10">
                        <img src="https://wtx-cdn.s3.amazonaws.com/img/wtx-logo.png" width={300} height={55} alt="" />
                    </div>
                    <h3>The account is pending approval!</h3>
                    <p className="p-0 mb-1">your account is currently under review. You will recieve notification via email once you&#39;ve been approved</p>
                    <p>Looking for additional support? <a href="mailto:support.worldtradex.com">support.worldtradex.com</a></p>
                </div>
            </div>
        </section>
    )
}

export default SellerPending