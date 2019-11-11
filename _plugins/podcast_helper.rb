module Jekyll
  module PodcastHelper
    # Format of a title:
    # #001 - Some sweet title
    def grab_episode_number(full_title)
      full_title[0..4]
    end

    def grab_title_only(full_title)
      full_title[7..-1]
    end
  end
end

Liquid::Template.register_filter(Jekyll::PodcastHelper)
