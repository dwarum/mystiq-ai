import React, { useState, useEffect } from "react";
import Link from "next/link";

const VPNRequired = () => {
  const [os, setOS] = useState('');

  useEffect(() => {
    // Detect OS
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('linux')) {
      setOS('linux');
    } else if (userAgent.includes('mac')) {
      setOS('mac');
    } else if (userAgent.includes('win')) {
      setOS('windows');
    } else {
      setOS('other');
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        padding: '40px',
        textAlign: 'center'
      }}>
        
        {/* Lock Icon */}
        <div style={{ marginBottom: '20px' }}>
          <svg 
            style={{ width: '60px', height: '60px', color: '#dc3545', margin: '0 auto' }}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
        </div>
        
        {/* Title */}
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#14213D',
          marginBottom: '15px'
        }}>
          VPN Connection Required
        </h1>
        
        {/* Description */}
        <p style={{
          color: '#666',
          fontSize: '16px',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          You must be connected to the Mystiq Labs VPN to access employee information.
        </p>
        
        {/* Instructions Box - OS Specific */}
        <div style={{
          background: '#e3f2fd',
          border: '1px solid #2196f3',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '25px',
          textAlign: 'left'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1976d2',
            marginBottom: '12px'
          }}>
            How to connect:
          </h3>

          {/* Linux Instructions */}
          {os === 'linux' && (
            <div>
              <p style={{ color: '#1565c0', fontSize: '14px', marginBottom: '10px', fontWeight: '600' }}>
                Open Terminal and run:
              </p>
              <div style={{
                background: '#263238',
                color: '#aed581',
                padding: '12px',
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '14px',
                marginBottom: '10px'
              }}>
                sudo tailscale up
              </div>
              <p style={{ color: '#1565c0', fontSize: '13px', fontStyle: 'italic' }}>
                Then return to this page and click refresh below
              </p>
            </div>
          )}

          {/* Mac/Windows Instructions */}
          {(os === 'mac' || os === 'windows') && (
            <ol style={{
              color: '#1565c0',
              fontSize: '14px',
              lineHeight: '1.8',
              paddingLeft: '20px',
              margin: 0
            }}>
              <li>Open the <strong>Tailscale</strong> app on your device</li>
              <li>Click <strong>"Connect"</strong></li>
              <li>Return to this page and click refresh below</li>
            </ol>
          )}

          {/* Other/Unknown OS */}
          {os === 'other' && (
            <ol style={{
              color: '#1565c0',
              fontSize: '14px',
              lineHeight: '1.8',
              paddingLeft: '20px',
              margin: 0
            }}>
              <li>Open the <strong>Tailscale</strong> app or run <code style={{ background: '#263238', color: '#aed581', padding: '2px 6px', borderRadius: '3px' }}>sudo tailscale up</code></li>
              <li>Connect to the VPN</li>
              <li>Return to this page and click refresh below</li>
            </ol>
          )}
        </div>
        
        {/* Buttons */}
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => window.location.reload()}
            style={{
              width: '100%',
              background: '#C9A961',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '10px',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#b89851'}
            onMouseOut={(e) => e.target.style.background = '#C9A961'}
          >
            I'm Connected - Refresh Page
          </button>
          
          <Link href="/">
            <a style={{
              display: 'block',
              width: '100%',
              background: '#f0f0f0',
              color: '#14213D',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}>
              Return to Home
            </a>
          </Link>
        </div>
        
        {/* Help Text */}
        <p style={{
          fontSize: '12px',
          color: '#999',
          marginTop: '20px'
        }}>
          Need help? Contact IT support at <a href="mailto:admin@mystiq.ai" style={{ color: '#C9A961' }}>admin@mystiq.ai</a>
        </p>
      </div>
    </div>
  );
};

export default VPNRequired;