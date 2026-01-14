import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import { Button } from './ui/Button';
import { ShieldCheck, CreditCard, Landmark, QrCode, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const PaymentPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = DESTINATIONS.find(d => d.id === id);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'CARD' | 'NETBANKING'>('UPI');

  if (!destination) {
      return <div className="p-10 text-center">Destination not found. <Button onClick={() => navigate('/')}>Go Home</Button></div>;
  }

  const basePrice = destination.priceStart;
  const taxes = Math.round(basePrice * 0.18);
  const discountAmount = discountApplied ? 2000 : 0;
  const finalPrice = basePrice + taxes - discountAmount;

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === 'FIRO2024') {
      setDiscountApplied(true);
    } else {
      alert("Invalid code. Try FIRO2024");
    }
  };

  return (
    <div className="min-h-screen bg-firo-cream pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-firo-navy mb-4">Booking Summary</h2>
            <img src={destination.imageUrl} alt={destination.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-firo-navy">{destination.name}</h3>
            <p className="text-firo-charcoal text-sm mb-4">{destination.region}</p>
            
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-firo-charcoal">
                <span>Base Fare (1 Traveler)</span>
                <span>₹{basePrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-firo-charcoal">
                <span>Taxes & Fees</span>
                <span>₹{taxes.toLocaleString('en-IN')}</span>
              </div>
              {discountApplied && (
                 <div className="flex justify-between text-green-600 font-bold">
                   <span>Discount Applied</span>
                   <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                 </div>
              )}
              <div className="flex justify-between text-xl font-bold text-firo-navy pt-4 border-t border-gray-100">
                <span>Total</span>
                <span>₹{finalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
             <label className="block text-sm font-bold text-firo-navy mb-2">Discount Code</label>
             <div className="flex gap-2">
               <input 
                  type="text" 
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Enter Coupon Code" 
                  className="flex-1 border border-gray-300 rounded-sm px-4 py-2 outline-none focus:border-firo-gold"
                  disabled={discountApplied}
               />
               <Button onClick={handleApplyDiscount} disabled={discountApplied} variant="secondary" size="sm">
                 {discountApplied ? <CheckCircle size={18} /> : 'Apply'}
               </Button>
             </div>
             {discountApplied && <p className="text-green-600 text-xs mt-2 flex items-center gap-1"><CheckCircle size={12}/> FIRO2024 applied successfully.</p>}
          </div>
        </div>

        {/* Right Column: Payment */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-firo-navy mb-6">Payment Method</h2>

            <div className="space-y-4">
              
              {/* UPI Option */}
              <div className={`border rounded-md overflow-hidden transition-all ${paymentMethod === 'UPI' ? 'border-firo-gold ring-1 ring-firo-gold' : 'border-gray-200'}`}>
                <button 
                  onClick={() => setPaymentMethod('UPI')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <QrCode size={24} className="text-firo-navy"/>
                    <span className="font-bold text-firo-navy">UPI / QR Code</span>
                  </div>
                  {paymentMethod === 'UPI' ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                </button>
                
                {paymentMethod === 'UPI' && (
                  <div className="p-6 bg-white animate-fade-in">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-inner">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FIRO-PAYMENT" alt="QR" className="w-32 h-32" />
                      </div>
                      <div className="flex-1 space-y-4 w-full">
                        <p className="text-sm text-gray-500">Scan with GPay, PhonePe, or Paytm</p>
                        <div>
                          <label className="text-xs font-bold text-gray-400">OR ENTER VPA</label>
                          <input type="text" placeholder="username@upi" className="w-full border-b border-gray-300 py-2 outline-none focus:border-firo-gold font-sans" />
                        </div>
                        <div className="flex gap-2 opacity-60">
                           {/* Simulated monochrome logos */}
                           <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                           <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                           <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Option */}
              <div className={`border rounded-md overflow-hidden transition-all ${paymentMethod === 'CARD' ? 'border-firo-gold ring-1 ring-firo-gold' : 'border-gray-200'}`}>
                <button 
                  onClick={() => setPaymentMethod('CARD')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                   <div className="flex items-center gap-3">
                    <CreditCard size={24} className="text-firo-navy"/>
                    <span className="font-bold text-firo-navy">Credit / Debit Card</span>
                  </div>
                  {paymentMethod === 'CARD' ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                </button>

                 {paymentMethod === 'CARD' && (
                  <div className="p-6 bg-white animate-fade-in space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">CARD NUMBER</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full border border-gray-300 rounded-sm p-3 outline-none focus:border-firo-gold font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1">EXPIRY</label>
                        <input type="text" placeholder="MM / YY" className="w-full border border-gray-300 rounded-sm p-3 outline-none focus:border-firo-gold font-mono" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1">CVV</label>
                        <input type="password" placeholder="123" className="w-full border border-gray-300 rounded-sm p-3 outline-none focus:border-firo-gold font-mono" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <input type="checkbox" id="save-card" />
                       <label htmlFor="save-card" className="text-sm text-gray-600">Save this card securely</label>
                    </div>
                  </div>
                 )}
              </div>

              {/* Net Banking Option */}
              <div className={`border rounded-md overflow-hidden transition-all ${paymentMethod === 'NETBANKING' ? 'border-firo-gold ring-1 ring-firo-gold' : 'border-gray-200'}`}>
                <button 
                  onClick={() => setPaymentMethod('NETBANKING')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                   <div className="flex items-center gap-3">
                    <Landmark size={24} className="text-firo-navy"/>
                    <span className="font-bold text-firo-navy">Net Banking</span>
                  </div>
                  {paymentMethod === 'NETBANKING' ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                </button>
                 {paymentMethod === 'NETBANKING' && (
                   <div className="p-6 bg-white animate-fade-in">
                      <select className="w-full border border-gray-300 p-3 rounded-sm outline-none focus:border-firo-gold">
                        <option>Select Bank</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>SBI</option>
                        <option>Axis Bank</option>
                      </select>
                   </div>
                 )}
              </div>

            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-firo-charcoal">
                <ShieldCheck size={20} className="text-green-600"/>
                <span className="text-sm font-semibold">Secure SSL Payment</span>
              </div>
              <Button size="lg" className="px-10 shadow-xl">
                Pay ₹{finalPrice.toLocaleString('en-IN')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
