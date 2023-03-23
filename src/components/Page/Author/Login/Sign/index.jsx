import React from 'react'

export default function Sign() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleDropdownFormEmail2">Email address</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <label for="exampleDropdownFormPassword2">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                        <label className="form-check-label" for="dropdownCheck2">
                            Remember me
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}
