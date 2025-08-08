import { useState, useEffect, useRef } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Search } from 'react-feather';

const SearchInputForm = ({ className }) => {
  const [suggestions] = useState([
    'dairy products',
    'beverages',
    'breakfast food',
    'fresh fruits',
    'organic vegetables',
    'bakery items',
    'snacks',
    'frozen foods',
    'pantry staples',
    'special offers'
  ]);
  
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Cycle through suggestions
  useEffect(() => {
    if (!isTyping) {
      intervalRef.current = setInterval(() => {
        setCurrentSuggestion(prev => (prev + 1) % suggestions.length);
        setAnimationKey(prev => prev + 1);
      }, 3000); // Change suggestion every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTyping, suggestions.length]);

  const handleFocus = () => {
    setIsTyping(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsTyping(false);
    }
  };

  // Get the current and next suggestion terms for animation
  const currentTerm = `"${suggestions[currentSuggestion]}"`;
  const nextTerm = `"${suggestions[(currentSuggestion + 1) % suggestions.length]}"`;

  return (
    <Form className={className}>
      <div className="position-relative w-100">
        <InputGroup>
          <Form.Control
            type="search"
            placeholder=" "
            className="rounded pe-5"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => {
              if (e.target.value) {
                setIsTyping(true);
              } else {
                setIsTyping(false);
              }
            }}
          />
          <span className="input-group-append position-absolute end-0 top-0 h-100 pe-2 d-flex align-items-center">
            <Button
              variant="transparent"
              className="p-0 border-0 shadow-none"
              onClick={(e) => e.preventDefault()}
            >
              <Search size={16} className="text-muted" />
            </Button>
          </span>
        </InputGroup>
        
        {!isTyping && (
          <div 
            ref={containerRef}
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center ps-3 overflow-hidden"
            style={{
              pointerEvents: 'none',
              color: '#6c757d',
              zIndex: 5
            }}
          >
            <div 
              key={animationKey}
              className="position-relative w-100"
              style={{
                height: '24px',
                overflow: 'hidden'
              }}
            >
              <div className="d-flex">
                <span className="me-1">Search for</span>
                <div style={{ minWidth: '120px', position: 'relative', height: '24px', overflow: 'hidden' }}>
                  <div 
                    className="position-absolute w-100"
                    style={{
                      animation: `slideUp 0.5s ease-in-out`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {currentTerm}
                  </div>
                  <div 
                    className="position-absolute w-100"
                    style={{
                      top: '100%',
                      animation: `slideUp 0.5s ease-in-out`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {nextTerm}
                  </div>
                </div>
              </div>
            </div>
            <style jsx global>{`
              @keyframes slideUp {
                0% {
                  transform: translateY(0);
                  opacity: 1;
                }
                100% {
                  transform: translateY(-100%);
                  opacity: 1;
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </Form>
  );
};

export default SearchInputForm;
