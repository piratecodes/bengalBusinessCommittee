"use client"
import React, { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from './actions'

import Header from '@/componant/header';
import Piller from '@/componant/5pillers';
import Trusted from "@/componant/trustedBy";
import Services from "@/componant/services";
// import Products from "@/componant/products";
import Plans from "@/componant/plan";
import Portfolio from "@/componant/portfolio";
// import BBCVines from "@/componant/bbcVines";
import About from "@/componant/about";
import FAQ from "@/componant/faqs";
import CTA from "@/componant/cta";

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Piller />
      <Trusted />
      <Services />
      {/* <Products /> */}
      <Plans />
      <Portfolio />
      {/* <BBCVines /> */}
      <About />
      <FAQ />
      <CTA />
      <PushNotificationManager />
      <InstallPrompt />
    </React.Fragment>
  );
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    .replace(/\\-/g, '+')
    .replace(/_/g, '/')
 
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}


function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [message, setMessage] = useState('');
 
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);
 
  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register('/sw.jsx', {
      scope: '/',
      updateViaCache: 'none',
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }
 
  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      ),
    });
    setSubscription(sub);
    await subscribeUser(sub);
  }
 
  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }
 
  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage('');
    }
  }
 
  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }
 
  return (
    <div className="bg-purple-200 rounded-2xl p-8 border border-indigo-700 shadow-xl max-w-2xl mx-auto my-12">
      <h3 className="text-2xl font-bold text-stone-800 mb-4">
        Push Notifications
      </h3>

      {subscription ? (
        // --- SUBSCRIBED STATE ---
        <>
          <p className="text-lg text-stone-700 mb-6">
            You are subscribed to push notifications.
          </p>

          {/* Wrapper for the send test UI */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter notification message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow px-4 py-3 text-white bg-purple-400 border border-indigo-700 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {/* Primary Button Style */}
            <button
              onClick={sendTestNotification}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
            >
              Send Test
            </button>
          </div>

          {/* Secondary/Destructive Button Style */}
          <button
            onClick={unsubscribeFromPush}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-purple-400 bg-transparent rounded-lg border border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200"
          >
            Unsubscribe
          </button>
        </>
      ) : (
        // --- NOT SUBSCRIBED STATE ---
        <>
          <p className="text-lg text-gray-400 mb-6">
            You are not subscribed to push notifications.
          </p>
          {/* Primary Button Style */}
          <button
            onClick={subscribeToPush}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
          >
            Subscribe
          </button>
        </>
      )}
    </div>
  );
}

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
 
  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window).MSStream
    );
 
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
  }, []);
 
  if (isStandalone) {
    return null; // Don't show install button if already installed
  }
 
  return (
    <div className="max-w-2xl mx-auto my-12 text-center">
      <h3 className="text-2xl font-bold text-white mb-6">
        Install App
      </h3>

      {/* Primary Button Style */}
      <button
        
        className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
      >
        Add to Home Screen
      </button>

      {isIOS && (
        // iOS-specific instructions
        <p className="text-lg text-gray-400 mt-6 max-w-lg mx-auto">
          To install this app on your iOS device, tap the share button
          <span
            role="img"
            aria-label="share icon"
            className="inline-block mx-2 text-xl text-white"
          >
            {/* Using a more common share icon representation */}
            <svg
              className="w-5 h-5 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
            </svg>
          </span>
          and then "Add to Home Screen"
          <span
            role="img"
            aria-label="plus icon"
            className="inline-block mx-1 text-xl text-white"
          >
            {/* Using a more common plus icon representation */}
            <svg
              className="w-5 h-5 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          .
        </p>
      )}
    </div>
  );
}

