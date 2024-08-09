const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser, Permissions } from './enums'
import { Review } from './interfaces'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
    const reviewTotalDisplayElement = document.querySelector('#reviews');
    if (reviewTotalDisplayElement) {
        reviewTotalDisplayElement.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
    } else {
        console.error('Element with id "reviews" not found in the DOM.');
    }
}

export function populateUser(isReturning : boolean, userName: string ) {
    const returningUserDisplayElement = document.querySelector('#returning-user');
    const userNameDisplayElement = document.querySelector('#user');
    if (returningUserDisplayElement && userNameDisplayElement) {
        returningUserDisplayElement.innerHTML = isReturning ? 'back' : '';
        userNameDisplayElement.innerHTML = userName;
    } else {
        console.error('Element with id "returning-user" or "user" not found in the DOM.');
    }
}

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (element) {
        const priceDisplay = document.createElement('div');
        if (typeof value === 'boolean' && value) {
            priceDisplay.innerHTML = price.toString() + '/night';
            element.appendChild(priceDisplay);
        }
    } else {
        console.error('Element is null.');
    }
}

export function makeMultiple(value: number) : string {
    return value > 1 || value === 0 ? 's' : '';
}

export function getTopTwoReviews(reviews : Review[]) : Review[]  {
    if (Array.isArray(reviews)) {
        const sortedReviews = [...reviews].sort((a, b) => b.stars - a.stars);
        return sortedReviews.slice(0,2);
    } else {
        console.error('Reviews is not an array.');
        return [];
    }
}