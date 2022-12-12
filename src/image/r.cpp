#include<iostream>
using namespace std;
class node{
    public:
    int data;
    node * left;
    node * right;
};
int countRightNodes(node * &root){
    if(root==NULL)return 0;
    int left  = countRightNodes(root->left);
    int right = countRightNodes(root->right);
    return left+right+ (root->right!=NULL ? 1 : 0);
}
node* inOrderPredecessor(node* root){
    if(root->right==NULL){
        return root;
    }
    else{
        return inOrderPredecessor(root->right);
    }
}
node* discard(node* &root,int data){
    if(root==NULL){
        return root;
    }
    else if(data<root->data){
        root->left = discard(root->left,data);
    }
    else if(data>root->data){
        root->right = discard(root->right,data);
    }
    else{
        if (root->left==NULL && root->right==NULL){
            root =  NULL;
        }
        else if(root->left==NULL){
            root = root->right;
        }
        else if(root->right==NULL){
            root = root->left;
        }
        else{
            node* iPre = inOrderPredecessor(root->left);
            root->data = iPre->data;
            root->left = discard(root->left,iPre->data);
        }
    }
    return root;
}
int main(){
    
    return 0;
}