# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)  this is the model that was generated into a controller. This is where CRUD action will take place.
class BlogPostsController < ApplicationController
  def index
    # ---2) this is assigning the key and accessing the BlogPost model that was generated. 
    @posts = BlogPost.all
  end

  # ---3) this is where we call the BlogPost content by using .find method and parameters to show data in the model.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) this will create a new instance of BlogPost by routing the create method. It will show a form to create new post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) this allows users to create new instances and add them to the database then add a redirect that allows the page to redirect automatically after the @post was created. 
    @post = BlogPost.create(blog_post_params)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) this allows a user to edit or modify a post using update that access instance of BlogPost.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this passes the parameters as an argument to make sure the current data is correct it will redirect the user to the updated post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This will remove information from the database. It will perform a delete action.
      redirect_to blog_posts_path
    end
  end

  # ---9) This is a method where it can only be accessed inside of its class. it is only accessible of the current object.
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
