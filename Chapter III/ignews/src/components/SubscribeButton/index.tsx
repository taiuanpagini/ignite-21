import React from 'react';
import { signIn, useSession } from 'next-auth/client';

import styles from './styles.module.scss';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = ({ priceId }) => {
  const [session] = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');

      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');

      return;
    }

    // criar checkout session
    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}>
      Subscribe now
    </button>
  );
};