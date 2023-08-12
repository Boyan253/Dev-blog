import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { UserService } from 'src/app/user/user.service';

@Injectable({ providedIn: 'root' })
export class OwnerActivate implements CanActivate {
    constructor(private userService: UserService, private apiService: ServiceService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const postId: any = route.paramMap.get('id');

        console.log(postId);

        return this.apiService.getPostDetails(postId).pipe(
            map((res) => {
                const post = res.singularPost;
                console.log(this.userService.isOwner(post?.ownerId));
                return this.userService.isOwner(post?.ownerId);
            })
        );
    }
}
