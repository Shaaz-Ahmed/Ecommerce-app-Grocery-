import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return (
        <>
          <div className="headerSearch d-flex align-items-center ml-3">
                                    <div className="input-group" style={{ width: '600px', height: '50px' }}>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Search items" 
                                            aria-label="Search items"
                                            style={{ 
                                                backgroundColor: '#f3f4f7', 
                                                height: '50px',
                                                border: '1px solid #ced4da',
                                                borderRight: 'none',
                                                borderRadius: '0.25rem 0 0 0.25rem'
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" style={{ 
                                                backgroundColor: '#f3f4f7', 
                                                height: '50px', 
                                                border: '1px solid #ced4da', 
                                                borderLeft: 'none', 
                                                borderRadius: '0 0.25rem 0.25rem 0' 
                                            }}>
                                                <IoSearch />
                                            </span>
                                        </div>
                                    </div>
                                </div>

        </>
    );
};

export default SearchBox;
